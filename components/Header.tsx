"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import header from "@/public/header.png";
import headerNoLineup from "@/public/header_nolineup.png";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="relative text-white">
      {isHome ? (
        <>
          <div className="container justify-center items-center mx-auto px-4">
            <Image
              src={header}
              alt="Reva Volunteer Fire and Rescue Company 16 Logo"
              className="w-full h-full object-cover"
            />
            <div className="flex justify-center mt-6">
              <Link
                href="/donate"
                className="px-6 py-3 bg-yellow-400 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container justify-center items-center mx-auto px-4">
            <Link href="/">
              <Image
                src={pathname === "/" ? header : headerNoLineup}
                alt="Reva Volunteer Fire and Rescue Company 16 Logo"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
          <div className="top-0 left-0 w-full px-4 py-4 flex justify-center md:relative md:-mt-10">
            <nav>
              <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
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
                <li>
                  <Link
                    href="/donate"
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
  );
}
