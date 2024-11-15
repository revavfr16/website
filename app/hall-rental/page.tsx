"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function HallRental() {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevent Link from navigating
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-800 text-center">
        Hall Rental
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-800">
            Rental Information
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our community hall is available for rent for various events such as:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Weddings and receptions</li>
            <li>Birthday parties</li>
            <li>Community meetings</li>
            <li>Workshops and seminars</li>
            <li>Fundraising events</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-red-800">
            Rental Rates
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Weekdays: $500 per day
            <br />
            Weekends: $750 per day
            <br />
            Hourly rate: $100 per hour (minimum 4 hours)
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            A security deposit of $250 is required for all rentals.
          </p>
          <Link
            href="#"
            onClick={openModal}
            className="w-full bg-red-800 hover:bg-red-700 text-white py-2 px-4 rounded font-bold"
          >
            Book Now
          </Link>
        </div>
        <div>
          <div className="border border-gray-300 rounded-lg overflow-hidden w-full max-w-4xl shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&showTitle=0&src=cmV2YWZpcmVyZW50YWxzQGdtYWlsLmNvbQ&color=%23039BE5"
              className="w-full h-[75vh] sm:h-[500px] md:h-[600px]"
            ></iframe>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={closeModal} />
    </div>
  );
}
