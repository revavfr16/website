import Image from "next/image";
import Link from "next/link";

export default function HallRental() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-800 text-center">
        Hall Rental
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-4">
            <Image
              src="https://images.unsplash.com/photo-1551149544-5e3a4a4a5b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Community Hall"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">
              Rental Information
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Our community hall is available for rent for various events such
              as:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Spacious main hall (capacity: 200 people)</li>
              <li>Fully equipped kitchen</li>
              <li>Audio-visual equipment</li>
              <li>Tables and chairs included</li>
              <li>Ample parking space</li>
            </ul>
          </div>
        </div>
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
            href="/booking"
            className="w-full bg-red-800 hover:bg-red-700 text-white py-2 px-4 rounded font-bold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
