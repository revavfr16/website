import Image, { StaticImageData } from 'next/image';

interface StaffMemberProps {
  name: string;
  position: string;
  imageUrl: string | StaticImageData;
}

export default function StaffMember({ name, position, imageUrl }: StaffMemberProps) {
  return (
    <div className="flex flex-col items-center space-x-4 mb-4">
      <div className="mx-auto w-32 h-32 relative border-4 border-white rounded-full overflow-hidden">
        <Image
          className="object-cover object-center h-32"
          alt={name}
          src={imageUrl}
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
}
