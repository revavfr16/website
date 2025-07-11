"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import header from "@/public/header.png";
import headerNoLineup from "@/public/header_nolineup.png";
import Image from "next/image";
import NwsAlerts from "./NWSAlerts";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hasAlerts = true;

  return (
    <>
      <NwsAlerts />
      <header className="relative text-white">
        {isHome ? (
          <div className="container justify-center items-center mx-auto px-4">
            <Image
              src={header}
              alt="Reva Volunteer Fire and Rescue Company 16 Logo"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <>
            <div className="container justify-center items-center mx-auto px-4">
              <Image
                src={pathname === "/" ? header : headerNoLineup}
                alt="Reva Volunteer Fire and Rescue Company 16 Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="top-0 left-0 w-full px-4 py-4 flex justify-center md:relative md:-mt-10">
              <nav>
                <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
                  <li>
                    <Link
                      href="/"
                      className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
                    >
                      Home
                    </Link>
                  </li>
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
                  {/* <li>
                    <Link
                      href="/events"
                      className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
                    >
                      Events
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/recruitment"
                      className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
                    >
                      Join Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdNW6gjAFJ5WPcRcN6LTFkgjAzB2gzyqbAWumja0kM5KSbhOA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 md:px-4 md:py-2 bg-[#a31b1f] text-white rounded hover:bg-white hover:text-[#a31b1f] transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.zeffy.com/embed/donation-form/donate-to-help-us-help-you"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 md:px-4 md:py-2 bg-yellow-400 text-black font-bold rounded hover:bg-yellow-500 transition-colors duration-200"
                    >
                      Donate Now
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </>
        )}
      </header>
    </>
  );
}
