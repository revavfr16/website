import Image from 'next/image';
import { CalendarDays } from 'lucide-react';
// import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

const events = [
  {
    date: '2024-03-15',
    title: 'Community Fire Safety Workshop',
    description: 'Learn essential fire safety tips for your home and family.',
    image: 'https://images.unsplash.com/photo-1582152629442-4a864303fb96?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    date: '2024-04-01',
    title: 'Volunteer Recruitment Day',
    description: 'Join our team! Learn about volunteer opportunities with Reva Fire and Rescue.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    date: '2024-04-22',
    title: 'Earth Day Clean-Up',
    description: 'Help keep our community clean and safe. Meet at the fire station at 9 AM.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    date: '2024-05-10',
    title: 'Annual Fundraiser Dinner',
    description: 'Support your local fire department at our annual spaghetti dinner fundraiser.'
  },
  {
    date: '2024-06-15',
    title: 'Summer Safety Fair',
    description: 'Interactive demonstrations and activities for the whole family.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600&h=400'
  },
];

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-800 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div key={index} className="relative h-48 w-full">
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full"></div>
            )}
          </div>

          // <Card key={index} className="overflow-hidden">
          //   <div className="relative h-48 w-full">
          //     {event.image ? (
          //       <Image
          //         src={event.image}
          //         alt={event.title}
          //         fill
          //         className="object-cover"
          //       />
          //     ) : (
          //       <div className="h-full w-full"></div>
          //     )}
          //   </div>
          //   <CardHeader>
          //     <div className="flex items-center mb-2">
          //       <CalendarDays className="text-red-800 mr-2" />
          //       <span className="text-sm font-semibold">
          //         {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          //       </span>
          //     </div>
          //     <h2 className="text-xl text-red-800">{event.title}</h2>
          //   </CardHeader>
          //   <CardBody>
          //     <p className="text-gray-700">{event.description}</p>
          //   </CardBody>
          // </Card>
        ))}
      </div>
    </div>
  );
}