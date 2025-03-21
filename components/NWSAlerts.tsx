"use client";

import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, AlertCircle, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface Alert {
  id: string;
  event: string;
  headline: string;
  description: string;
  severity: string;
  urgency: string;
}

const CULPEPER_UGC = "VAZ051";
const CULPEPER_ZONE = `https://api.weather.gov/zones/forecast/${CULPEPER_UGC}`;
const CULPEPER_FORECAST = `https://forecast.weather.gov/MapClick.php?zoneid=${CULPEPER_UGC}`;

export default function NwsAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const fetchAlerts = async () => {
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
            ["Extreme", "Severe", "Moderate"].includes(alert.severity)
          );

        setAlerts(filteredAlerts);
      } catch (error) {
        console.error("Error fetching NWS alerts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!isDismissed) {
      fetchAlerts();
      const interval = setInterval(fetchAlerts, 5 * 60 * 1000); // Refresh every 5 minutes
      return () => clearInterval(interval);
    }
  }, [isDismissed]);

  if (loading || alerts.length === 0 || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <Alert className="border-red-500 bg-red-50/95 relative shadow-lg max-w-6xl mx-auto">
        <div className="absolute right-2 top-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 hover:bg-red-100"
            onClick={() => setIsDismissed(true)}
          >
            <X className="h-4 w-4 text-red-500" />
          </Button>
        </div>
        <AlertCircle className="h-4 w-4 text-red-500" />
        <AlertTitle className="text-red-800 font-bold pr-8 flex items-center justify-between">
          Culpeper County Weather Alerts
          <Button
            asChild
            variant="default"
            className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            <a
              href={CULPEPER_FORECAST}
              target="_blank"
              rel="noopener noreferrer"
            >
              Detailed Forecast
            </a>
          </Button>
        </AlertTitle>
        <AlertDescription className="text-red-700">
          {/* <div className="flex justify-between items-center mb-4">

          </div> */}
          <Accordion type="single" collapsible className="w-full">
            {alerts.map((alert) => (
              <AccordionItem 
                key={alert.id} 
                value={alert.id}
                className="border-red-200"
              >
                <AccordionTrigger className="hover:no-underline py-2">
                  <div className="flex items-center gap-2">
                    {alert.severity === "Extreme" ? (
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-red-800 font-bold">{alert.event}</span>
                    <span className="text-sm text-red-600">({alert.severity})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-red-700 pl-6">
                    <p className="font-semibold">{alert.headline}</p>
                    <p className="text-sm">{alert.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AlertDescription>
      </Alert>
    </div>
  );
}