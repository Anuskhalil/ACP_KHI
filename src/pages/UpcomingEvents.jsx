import React, { useEffect, useState } from "react";

// Component to display upcoming events
const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  // Fetch events on component mount and periodically check for updates
  useEffect(() => {
    const fetchEvents = () => {
      fetch("http://10.10.10.231:5000/get_events")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setEvents(data);
        })
        .catch((error) => console.error("Error fetching events:", error));
    };

    // Initial fetch and polling for real-time updates every 10 seconds
    const intervalId = setInterval(fetchEvents, 10000);
    fetchEvents();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-6 bg-[#111827] text-center">
      <div className="container mx-auto py-12 bg-[#1F2937] rounded-lg">
        <div className="grid grid-cols-3 gap-8 max-w-8xl py-4 px-2">
          <div className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
            <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-400">
              Stay updated with our latest events. Participate in workshops,
              enjoy cultural festivals, and more. Be part of our vibrant
              community!
            </p>
          </div>

          {events.length > 0 ? (
            events.slice(0, 2).map((event, index) => (
              <div
                key={event.id}
                className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg"
              >
                <h3 className="text-[#F5F1E1] text-xl font-semibold mb-4">
                  {index === 0 ? "Nearest Event" : "Next Event"}
                </h3>
                <div className="bg-black w-full h-40 mb-4 flex items-center justify-center text-[#F5F1E1]">
                  <img
                    src={event.poster}
                    alt={event.eventName}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h4 className="text-lg font-bold text-[#F5F1E1] mb-2">
                  {event.eventName}
                </h4>
                <p className="text-gray-400 mb-1">
                  <strong>Date:</strong>{" "}
                  {new Date(event.startDate).toDateString()}
                </p>
                <p className="text-gray-400 mb-4">
                  <strong>Venue:</strong> {event.venue}
                </p>
                <button
                  className={`w-full py-2 rounded-lg ${
                    event.eventType === "Free"
                      ? "bg-green-600 text-[#F5F1E1] hover:bg-green-700"
                      : "bg-red-600 text-[#F5F1E1] hover:bg-red-700"
                  } transition`}
                >
                  {event.eventType === "Free" ? "Register Now" : "Buy Ticket"}
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-4 text-[#F5F1E1]">
              <p>No upcoming events available.</p>
            </div>
          )}

          <div className="hidden md:block md:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
