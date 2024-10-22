import Image from 'next/image';

const images = [
  { src: "https://images.unsplash.com/photo-1545262810-a4d8a9f0e4f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Firehouse Exterior" },
  { src: "https://images.unsplash.com/photo-1551149544-5e3a5a4a5b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Community Hall" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Community Event" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Firefighter Equipment" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Community Gathering" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", alt: "Fire Truck" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-800 text-center">Photo Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}