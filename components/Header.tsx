"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import header from "@/public/header.png";
import headerNoLineup from "@/public/header_nolineup.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative text-white">
      <div className="container flex justify-center items-center mx-auto">
        <Link href="/">
          <Image
            src={pathname === "/" ? header : headerNoLineup}
            alt="Reva Volunteer Fire and Rescue Company 16 Logo"
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      <div
        className={`${pathname === "/" && "hidden"} top-0 left-0 w-full px-4 py-4 flex justify-center md:relative md:-mt-10`}
      >
        <nav>
          <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            <li>
              <Link
                href="/about"
                className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/hall-rental"
                className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
              >
                Hall Rental
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/recruitment"
                className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
