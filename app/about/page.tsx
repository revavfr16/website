import Image from 'next/image';
import StaffMember from '@/components/StaffMember';
import response from '@/public/response16.jpg'

const staffMembers = [
  { name: "John Doe", position: "President", imageUrl: "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=64" },
  { name: "Jane Smith", position: "Vice President", imageUrl: "https://gravatar.com/avatar/305e460b479e2e5b48aec07710c08d51?s=64" },
  { name: "Mike Johnson", position: "Chief", imageUrl: "https://gravatar.com/avatar/405e460b479e2e5b48aec07710c08d52?s=64" },
  { name: "Sarah Brown", position: "Deputy Chief", imageUrl: "https://gravatar.com/avatar/505e460b479e2e5b48aec07710c08d53?s=64" },
  { name: "Tom Wilson", position: "Captain", imageUrl: "https://gravatar.com/avatar/605e460b479e2e5b48aec07710c08d54?s=64" },
  { name: "Emily Davis", position: "Lieutenant", imageUrl: "https://gravatar.com/avatar/705e460b479e2e5b48aec07710c08d55?s=64" },
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-800 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={response}
            alt="Firehouse History"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Our History</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              The Company was founded in 1995 and has grown from a small group running out of a home garage until the building was constructed to over 40 active fire and rescue personnel, 30 active support members and 32 lifetime retired members. 
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300">
              Over the years, we&apos;ve expanded our capabilities, equipment, and training to meet the evolving needs of our community. Our commitment to excellence and service remains unwavering as we continue to be a vital part of Culpeper&apos;s emergency response system.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              At Reva Volunteer Fire and Rescue Company 16, we are committed to protecting the life and property of the citizens of Culpeper County and the surrounding areas, to provide instruction and demonstrations in life and fire safety to the public, and to promote positive working relationships between all county fire and rescue companies.
            </p>
          </section>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-red-800 text-center">Our Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <StaffMember key={index} {...member} />
          ))}
        </div>
      </section>
    </div>
  );
}