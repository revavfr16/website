import Image from "next/image";
import StaffMember from "@/components/StaffMember";
import lineup from "@/public/apparatus/FrontLineup_Alt.jpg";
import rescue from "@/public/apparatus/RescueEngine16.jpg";
import wagon from "@/public/apparatus/Wagon16.jpg";
import tanker from "@/public/apparatus/Tanker16.jpg";
import brush from "@/public/apparatus/Brush16.jpg";
import ambulance from "@/public/apparatus/Ambulance16.jpg";
import response from "@/public/apparatus/Response16.jpg";
import president from "@/public/staff/president.jpg";
import chief from "@/public/staff/chief.jpg";

const apparatus = [
  {
    name: "Rescue Engine 16",
    imageUrl: rescue,
    specs: {
      "Year Built": "2021",
      "Manufacturer": "E-One Typhoon",
      "Engine": "Cummins X15",
      "Pump Size": "1500 GPM",
      "Tank Size": "750 Gallons Water",
      "Seating Capacity": 4,
      "Special Equipment": "Amkus Ion Battery Powered Hydraulic Cutting and Spreading tools\nParatech highway kit",
    },
  },
  {
    name: "Wagon 16",
    imageUrl: wagon,
    specs: {
      "Year Built": "2005",
      "Manufacturer": "Pierce Dash",
      "Engine": "Detroit Series 60, 450 HP",
      "Pump Size": "1500 GPM",
      "Tank Size": "1000 Gallons Water \n 50 Gallons Class A Foam",
      "Seating Capacity": 6,
      "Special Equipment": "Husky Class A Foam System",
    },
  },
  {
    name: "Tanker 16",
    imageUrl: tanker, // Replace with actual image if available
    specs: {
      "Year Built": "2001",
      "Manufacturer": "Freightliner / S&S",
      "Engine": "Caterpillar 410 HP",
      "Pump Size": "1250 GPM Waterous Pump",
      "Tank Size": "3000 Gallons",
      "Seating Capacity": 2,
      "Special Equipment": "3500 Gallon Dump Tank",
    },
  },
  {
    name: "Brush 16",
    imageUrl: brush, // Replace with actual image if available
    specs: {
      "Year Built": "2018",
      "Manufacturer": "Ford F350",
      "Engine": "6.7 Turbo Diesel",
      "Pump Size": "100 GPM W.S. Darley Pump",
      "Tank Size": "230 Gallons Water / 10 Gallons Class A Foam",
      "Seating Capacity": 2,
      "Special Equipment": "Pump and Go, Warn 15K Front Winch, Ground Sweeps",
    },
  },
  {
    name: "Response 16",
    imageUrl: response, // Replace with actual image if available
    specs: {
      "Year Built": "2011",
      "Manufacturer": "Ford F250",
      "Engine": "6.7 Diesel",
      "Seating Capacity": 5,
      "Special Equipment": "EMS Response Vehicle",
    },
  },
  {
    name: "Ambulance 16",
    imageUrl: ambulance, // Replace with actual image if available
    specs: {
      "Year Built": "2019",
      "Manufacturer": "Ford F550",
      "Engine": "6.7 Diesel",
      "Seating Capacity": 3,
      "Special Equipment": "EMS Transport Vehicle",
    },
  },
];

const staffMembers = [
  {
    name: "Dennis Dodson",
    position: "President",
    imageUrl: president,
  },
  // {
  //   name: "Jane Smith",
  //   position: "Vice President",
  //   imageUrl:
  //     "https://gravatar.com/avatar/305e460b479e2e5b48aec07710c08d51?s=64",
  // },
  {
    name: "Matthew McClurg",
    position: "Chief",
    imageUrl: chief,
  },
  // {
  //   name: "Sarah Brown",
  //   position: "Deputy Chief",
  //   imageUrl:
  //     "https://gravatar.com/avatar/505e460b479e2e5b48aec07710c08d53?s=64",
  // },
  // {
  //   name: "Tom Wilson",
  //   position: "Captain",
  //   imageUrlg
  //     "https://gravatar.com/avatar/605e460b479e2e5b48aec07710c08d54?s=64",
  // },
  // {
  //   name: "Emily Davis",
  //   position: "Lieutenant",
  //   imageUrl:
  //     "https://gravatar.com/avatar/705e460b479e2e5b48aec07710c08d55?s=64",
  // },
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-800 text-center">
        About Us
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={lineup}
            alt="Firehouse History"
            fill
            className="object-cover"
            quality={50}
          />
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">
              Our History
            </h2>
            <p className="mb-4 text-gray-700">
              The Company was founded in 1995 and has grown from a small group
              running out of a home garage until the building was constructed to
              over 40 active fire and rescue personnel, 30 active support
              members and 32 lifetime retired members.
            </p>
            <p className="mb-4 text-gray-700">
              Over the years, we&apos;ve expanded our capabilities, equipment,
              and training to meet the evolving needs of our community. Our
              commitment to excellence and service remains unwavering as we
              continue to be a vital part of Culpeper&apos;s emergency response
              system.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-red-800">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At Reva Volunteer Fire and Rescue Company 16, we are committed to
              protecting the life and property of the citizens of Culpeper
              County and the surrounding areas, to provide instruction and
              demonstrations in life and fire safety to the public, and to
              promote positive working relationships between all county fire and
              rescue companies.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6 mt-6 text-red-800 text-center">
        Our Staff
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {staffMembers.map((member, index) => (
          <StaffMember key={index} {...member} />
        ))}
      </div>


      <h1 className="text-4xl font-bold mb-6 mt-6 text-red-800 text-center">
        Apparatus
      </h1>
      <div className="space-y-6">
        {apparatus.map((item, index) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative rounded-lg shadow-lg">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={1200}
                height={800}
                className="object-cover rounded-lg"
                quality={50}
              />
            </div>
            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg inline-block align-middle">
              <h2 className="text-2xl font-semibold mb-4 text-red-800">
                {item.name}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full table-fixed border-collapse">
                  <tbody>
                    {Object.entries(item.specs).map(([key, value]) => (
                      <tr key={key} className="px-1 border-b border-gray-600 text-gray-600">
                        <td className="font-semibold py-2 pr-4 align-top">
                          {key}:
                        </td>
                        <td className="py-2 whitespace-pre-line break-words">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
