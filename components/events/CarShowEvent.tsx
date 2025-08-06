"use client";

import Image from "next/image";
import CarShow from "@/public/events/carshow.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CarShowEvent() {
  return (
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
  );
}