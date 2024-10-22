import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";
import patch from '@/public/RevaPatch.png';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <div className="w-24 h-24 mr-4">
              <Image src={patch} alt="Reva Volunteer Fire and Rescue" layout="fixed" width={96} height={96} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">
                Reva Volunteer Fire and Rescue
              </h3>
              <p className="text-gray-300">
                18230 Birmingham Road, Culpeper, VA 22701
              </p>
              <p className="text-gray-300">Phone: (540) 547-3747</p>
              <p className="text-gray-300">Email: info@reva16.org</p>
            </div>
          </div>
          <div></div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Reva Volunteer Fire and Rescue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
