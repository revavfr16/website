"use client";

import Image from "next/image";
import BurnBan from "@/public/events/BurnBan.jpg";
import CarShow from "@/public/events/carshow.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import NwsAlerts from "./NWSAlerts";

const today = new Date();
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

        <div>
          <h3 className="text-xl font-bold mb-3 text-red-800">Upcoming Events</h3>
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative rounded-lg overflow-hidden cursor-pointer hover:opacity-95 transition-opacity">
                <div className="h-48">
                  <Image
                    src={CarShow}
                    alt="Annual Car Show"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="p-0 w-screen h-screen sm:w-[95vw] sm:h-[95vh] sm:max-w-none bg-black">
              <DialogHeader>
                <DialogTitle className="sr-only">Annual Car Show Image</DialogTitle>
              </DialogHeader>
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={CarShow}
                  alt="Annual Car Show"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
