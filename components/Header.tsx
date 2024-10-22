import Link from 'next/link';
import revaIcon from '@/public/REVA-iconWHITE.png'
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-red-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image src={revaIcon} alt="Reva Volunteer Fire and Rescue Company 16 Logo" width={50} height={50} />
          <span className="text-xl font-bold">Reva Volunteer Fire and Rescue Company 16</span>
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
            <li><Link href="/about" className="hover:underline transition-colors duration-200">About Us</Link></li>
            <li><Link href="/hall-rental" className="hover:underline transition-colors duration-200">Hall Rental</Link></li>
            <li><Link href="/gallery" className="hover:underline transition-colors duration-200">Photo Gallery</Link></li>
            <li><Link href="/events" className="hover:underline transition-colors duration-200">Events</Link></li>
            <li><Link href="/recruitment" className="hover:underline transition-colors duration-200">Join Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}