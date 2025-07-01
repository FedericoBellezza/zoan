import Image from "next/image";
import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: events, error } = await supabase.from("events").select("*");

  if (error) {
    console.error("Error fetching events:", error);
    return (
      <div>
        <h1>ZOAN</h1>
        <p>Error loading events.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800">
      <h1 className="text-3xl font-bold text-center pt-8">ZOAN</h1>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Events</h2>
        {events && events.length > 0 ? (
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl text-gray-800 font-bold">
                  {event.name}
                </h3>
                <p className="text-gray-600">{event.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}
