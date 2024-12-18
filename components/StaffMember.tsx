import Image, { StaticImageData } from 'next/image';

interface StaffMemberProps {
  name: string;
  position: string;
  imageUrl: string | StaticImageData;
}

export default function StaffMember({ name, position, imageUrl }: StaffMemberProps) {
  // <div className="flex items-center space-x-4 mb-4">
  //   <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full">
  //     <Image
  //       src={imageUrl}
  //       alt={name}
  //       width={128}
  //       height={128}
  //       className="object-cover object-center h-32"
  //     />
  //   </div>
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="mx-auto w-32 h-32 relative border-4 border-white rounded-full overflow-hidden">
        <Image
          className="object-cover object-center h-32"
          alt={name}
          src={imageUrl}
        />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
}
