"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Alert {
  id: string;
  event: string;
  headline: string;
  description: string;
  severity: string;
  urgency: string;
  link: string;
}

const CULPEPER_UGC = "VAZ051";
const CULPEPER_ZONE = `https://api.weather.gov/zones/forecast/${CULPEPER_UGC}`;

export default function NwsAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [dismissed, setDismissed] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const storedDismissedId = localStorage.getItem("dismissedAlertId");

    async function fetchAlerts() {
      try {
        const res = await fetch("https://api.weather.gov/alerts/active");
        const data = await res.json();

        const filteredAlerts = data.features
          .filter((feature: any) => {
            const ugcCodes = feature.properties.geocode?.UGC || [];
            const affectedZones = feature.properties.affectedZones || [];
            return (
              ugcCodes.includes(CULPEPER_UGC) ||
              affectedZones.includes(CULPEPER_ZONE)
            );
          })
          .map((feature: any) => {
            const props = feature.properties;
            const awipsId = props.parameters.AWIPSidentifier?.[0] || "";
            const officeCode = awipsId.slice(-3).toLowerCase();
            const nwsOfficeUrl = officeCode
              ? `https://www.weather.gov/${officeCode}/`
              : "https://www.weather.gov/";

            return {
              id: feature.id,
              event: props.event,
              severity: props.severity,
              urgency: props.urgency,
              link: nwsOfficeUrl,
            };
          })
          .filter((alert: Alert) =>
            ["Extreme", "Severe", "Moderate"].includes(alert.severity),
          );

        if (filteredAlerts.length > 0) {
          const latestAlertId = filteredAlerts[0].id;
          if (storedDismissedId !== latestAlertId) {
            setAlerts(filteredAlerts);
            setDismissed(false);
          }
        }
      } catch (error) {
        console.error("Error fetching NWS alerts:", error);
      }
    }

    fetchAlerts();
  }, []);

  const dismissAlert = () => {
    if (alerts.length > 0) {
      localStorage.setItem("dismissedAlertId", alerts[0].id);
    }
    setDismissed(true);
  };

  if (dismissed || alerts.length === 0) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg">
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            className="font-bold underline flex items-center"
          >
            ⚠️ {alerts.length} Weather Alert{alerts.length > 1 ? "s" : ""}
          </button>
        ) : (
          <div className="p-4 space-y-2">
            <strong>⚠️ Active Weather Alerts:</strong>
            <ul className="list-disc list-inside">
              {alerts.map((alert) => (
                <li key={alert.id}>
                  <Link
                    href={alert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {alert.event} ({alert.severity})
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => setExpanded(false)}
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 transition"
              >
                Close
              </button>
              <button
                onClick={dismissAlert}
                className="bg-white text-red-700 px-3 py-1 rounded font-bold hover:bg-gray-200 transition"
              >
                ✖ Dismiss All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
