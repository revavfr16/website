import Image, { StaticImageData } from "next/image";

interface StaffMemberProps {
  name: string;
  position: string;
  imageUrl: string | StaticImageData | undefined;
}

// export default function StaffMember({
//   name,
//   position,
//   imageUrl,
// }: StaffMemberProps) {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center space-y-4 mb-4 min-h-[250px]">
//       {imageUrl ? (
//         <div className="w-32 h-32 relative border-4 border-red-800 rounded-full overflow-hidden">
//           <Image
//             className="object-cover object-center h-32 w-32"
//             alt={name}
//             src={imageUrl}
//           />
//         </div>
//       ) : (
//         <div className="w-32 h-32 relative rounded-full overflow-hidden">
//           <div className="h-full w-full"></div>
//         </div>
//       )}

//       <div className="text-center text-gray-700 dark:text-gray-100">
//         <h3 className="font-semibold text-lg">{name}</h3>
//         <p className="text-gray-600 dark:text-gray-400">{position}</p>
//       </div>
//     </div>
//   );
// }

export default function StaffMember({ name, position }: StaffMemberProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center space-y-4 mb-4">
      <div className="text-center text-gray-700 dark:text-gray-100">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{position}</p>
      </div>
    </div>
  );
}
