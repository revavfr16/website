"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FirePreventionWeekCard() {
  return (
    <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-orange-800 dark:text-orange-200">
          Fire Prevention Week
        </CardTitle>
        <CardDescription className="text-orange-700 dark:text-orange-300">
          October 1-7, 2024 • Learn fire safety tips and meet your local firefighters
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-sm text-orange-600 dark:text-orange-400 mb-3">
          Join us for educational events, station tours, and fire safety demonstrations throughout the week.
        </p>
        <Link
          href="/events"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-orange-600 hover:bg-orange-700 text-white font-bold w-full">
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}