"use client";

import Image from "next/image";
import BurnBan from "@/public/events/BurnBan.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import NwsAlerts from "./NWSAlerts";
import CarShowEvent from "./events/CarShowEvent";

const today = new Date();

// Event configuration - each event is a React component with visibility logic
const events = [
  {
    id: "carshow-2025",
    component: CarShowEvent,
    isVisible: () => today <= new Date("2025-07-19"),
  },
  // Future events can be added here with their own components and visibility logic
  // Example:
  // {
  //   id: "fire-prevention-week",
  //   component: FirePreventionCard,
  //   isVisible: () => today.getMonth() === 9 && today.getDate() >= 1 && today.getDate() <= 7, // October 1-7
  // },
];

const activeEvents = events.filter((event) => event.isVisible());

const showBurnBan =
  (today.getMonth() + 1 === 2 && today.getDate() >= 15) || // February 15th to the end of the month
  today.getMonth() + 1 === 3 ||
  today.getMonth() + 1 === 4; // March and April

export default function BulletinBoard() {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="border-b">
        <CardTitle className="text-xl font-bold text-red-800">
          Community Bulletin Board
        </CardTitle>
        <CardDescription className="text-gray-700 dark:text-gray-300">
          Stay informed about important notices and upcoming events
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 space-y-6">
        <NwsAlerts />

        {showBurnBan && (
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-md mt-3">
              <Image
                src={BurnBan}
                alt="Burn Ban Notice"
                width={800}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </div>
        )}

        <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold text-amber-800 dark:text-amber-200">Support Our Mission!</CardTitle>
            <CardDescription className="text-amber-700 dark:text-amber-300">
              Help us continue serving and protecting our community.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <Link
              href="https://www.zeffy.com/embed/donation-form/donate-to-help-us-help-you"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold w-full">
                Donate Now
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Render upcoming events */}
        {activeEvents.length > 0 && (
          <div>
            <h3 className="text-xl font-bold mb-3 text-red-800">Upcoming Events</h3>
            <div className="space-y-4">
              {activeEvents.map((event) => {
                const EventComponent = event.component;
                return <EventComponent key={event.id} />;
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
