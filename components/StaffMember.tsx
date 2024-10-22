import Image from 'next/image';

interface StaffMemberProps {
  name: string;
  position: string;
  imageUrl: string;
}

export default function StaffMember({ name, position, imageUrl }: StaffMemberProps) {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <Image
        src={imageUrl}
        alt={name}
        width={64}
        height={64}
        className="rounded-full"
      />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
}