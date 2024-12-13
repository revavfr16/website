import Link from "next/link";
import Image from "next/image";
import response from "@/public/Response16.jpg";

export default function Recruitment() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-800 text-center">
        Join Our Team
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-800">
            Membership Requirements
          </h2>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Must be at least 18 years old (16 for Junior Members)</li>
            <li>Pass a background check</li>
            <li>Complete required training courses</li>
            <li>Commit to regular shifts and ongoing training</li>
            <li>Be physically fit and able to perform duties</li>
            <li>Live within the Reva Fire and Rescue response area</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2 text-red-800">
            Application Process
          </h3>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Download and complete the application form</li>
            <li>Gather required documents (ID, driver&apos;s license, etc.)</li>
            <li>Submit your application in person at our station</li>
            <li>Attend an interview with our recruitment committee</li>
            <li>Complete a physical ability test</li>
            <li>Pass a background check</li>
          </ul>
          <Link
            href="/application-form"
            className="inline-block bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Application Form
          </Link>
        </div>
        <div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">
              Junior Member Program
            </h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Our Junior Member Program is designed for young adults aged 16-17
              who are interested in fire and rescue services. This program
              provides:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Hands-on training in fire and rescue techniques</li>
              <li>Mentorship from experienced firefighters and EMTs</li>
              <li>Opportunities to assist in non-emergency situations</li>
              <li>Preparation for a potential career in emergency services</li>
            </ul>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Junior Members are subject to additional restrictions and parental
              consent is required.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg mt-6 overflow-hidden shadow-lg mb-4">
            <Image
              src={response}
              alt="Firehouse History"
              fill
              className="object-cover object-[50%_75%]"
              quality={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
