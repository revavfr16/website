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
const CULPEPER_FORECAST = `https://forecast.weather.gov/MapClick.php?zoneid=${CULPEPER_UGC}`;

export default function NwsAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const res = await fetch("https://api.weather.gov/alerts/active");
        const data = await res.json();

        console.log("Response:", res);

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

            return {
              id: feature.id,
              event: props.event,
              headline: props.headline,
              description: props.description,
              severity: props.severity,
              urgency: props.urgency,
            };
          })
          .filter((alert: Alert) =>
            ["Extreme", "Severe", "Moderate"].includes(alert.severity),
          );

        console.log("Filtered Alerts", filteredAlerts);
        setAlerts(filteredAlerts);
      } catch (error) {
        console.error("Error fetching NWS alerts:", error);
      }
    }

    fetchAlerts();
  }, []);

  if (alerts.length === 0) return null;

  return (
    <div className="bg-red-600 text-white text-center py-3 px-4 rounded-lg shadow-md">
      <strong className="block text-lg">
        ⚠️ Culpeper County Weather Alerts
      </strong>
      <div className="mt-2">
        <Link
          href={CULPEPER_FORECAST}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Detailed Forecast
        </Link>
      </div>
      <div className="mt-3 space-y-1">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="bg-red-700 p-2 rounded-md shadow-sm text-sm"
          >
            <strong>{alert.headline}</strong> - {alert.description}{" "}
            <span className="font-bold">({alert.severity})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
