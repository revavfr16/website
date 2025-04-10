"use client";

import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  const [expandedAlerts, setExpandedAlerts] = useState<Set<string>>(new Set());

  const toggleAlert = (id: string) => {
    setExpandedAlerts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
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
              headline: props.headline || props.event,
              description: props.description,
              severity: props.severity,
              urgency: props.urgency,
              link: nwsOfficeUrl,
            };
          })
          .filter((alert: Alert) =>
            ["Extreme", "Severe", "Moderate"].includes(alert.severity)
          );

        setAlerts(filteredAlerts);
      } catch (error) {
        console.error("Error fetching NWS alerts:", error);
      }
    }

    fetchAlerts();
    // Fetch alerts every 5 minutes
    const interval = setInterval(fetchAlerts, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (alerts.length === 0) return null;

  return (
    <div className="space-y-4">
      {alerts.map((alert) => {
        const isExpanded = expandedAlerts.has(alert.id);
        return (
          <Alert
            key={alert.id}
            className={`border-red-500 bg-red-50 ${
              alert.severity === "Extreme" ? "animate-pulse" : ""
            }`}
          >
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertTitle className="text-red-800 font-bold">
              <Link
                href={alert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {alert.event} ({alert.severity})
              </Link>
            </AlertTitle>
            <AlertDescription className="text-red-700">
              <p className="font-semibold">{alert.headline}</p>
              <div className={`relative ${!isExpanded ? "max-h-24 overflow-hidden" : ""}`}>
                <p className="mt-2">{alert.description}</p>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-red-50 to-transparent" />
                )}
              </div>
              <div className="flex justify-center mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-700 hover:text-red-800 hover:bg-red-100"
                  onClick={() => toggleAlert(alert.id)}
                >
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
}
