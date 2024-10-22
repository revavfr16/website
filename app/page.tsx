import Image from "next/image";
import Link from "next/link";
import lineup from "@/public/FrontLineupCompressed.jpg";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-red-800">
          Reva Volunteer Fire and Rescue Company 16
        </h1>
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <Image
            src={lineup}
            alt="Firehouse"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            className="object-cover"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-red-800">About Us</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Learn about our history and mission to serve the community.
          </p>
          <Link
            href="/about"
            className="inline-block bg-red-800 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600 font-bold py-2 px-4 rounded"
          >
            Read More
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-red-800">Hall Rental</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Host your next event in our spacious community hall.
          </p>
          <Link
            href="/hall-rental"
            className="inline-block bg-red-800 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600 font-bold py-2 px-4 rounded"
          >
            Book Now
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-red-800">Photo Gallery</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            View images of our facilities and community events.
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-red-800 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600 font-bold py-2 px-4 rounded"
          >
            View Gallery
          </Link>
        </div>
      </section>

      <section className="text-center bg-red-100 py-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-semibold mb-4 text-red-800">
          Upcoming Events
        </h2>
        <p className="mb-6 text-gray-700">
          Join us for our next community gathering!
        </p>
        <Link
          href="/events"
          className="inline-block bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          See All Events
        </Link>
      </section>
    </div>
  );
}
