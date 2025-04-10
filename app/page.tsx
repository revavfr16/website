import Link from "next/link";
import BulletinBoard from "@/components/BulletinBoard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left column - Cards (3 columns) */}
        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[

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
                    className={"bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Bulletin Board (1 column) */}
        <div className="lg:sticky lg:top-4">
          <BulletinBoard />
        </div>
      </div>
    </div>
  );
}
