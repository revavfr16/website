import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            title: "Support Our Mission",
            text: "Your generosity helps us continue serving the community.",
            link: "https://www.paypal.com/donate?hosted_button_id=259S9Q9DE54SU",
            buttonText: "Donate Now",
          },
          {
            title: "About Us",
            text: "Learn about our history and mission to serve the community.",
            link: "/about",
            buttonText: "Read More",
          },
          {
            title: "Hall Rental",
            text: "Host your next event in our spacious community hall.",
            link: "/hall-rental",
            buttonText: "Book Now",
          },
          {
            title: "We Need You!",
            text: "Ready to serve your community?",
            link: "/recruitment",
            buttonText: "Learn More & Apply",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col"
          >
            <h2 className="text-xl font-bold mb-4 text-red-800">
              {item.title}
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300 flex-grow">
              {item.text}
            </p>
            <div className="flex justify-center">
              <Link
                href={item.link}
                className={`${
                  index === 0
                    ? "bg-yellow-400 text-black hover:bg-yellow-500"
                    : "bg-red-800 hover:bg-red-700 text-white"
                } font-bold py-2 px-4 rounded`}
              >
                {item.buttonText}
              </Link>
            </div>
          </div>
        ))}
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
