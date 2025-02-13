import React, { useState } from "react";

const EventSchedule = () => {
  // State to track the active day
  const [activeDay, setActiveDay] = useState("Day One");

  // Sample event data
  const eventData = {
    "Day One": [
      {
        id: 1,
        name: "Opening Ceremony",
        position: "Host",
        event: "Inauguration",
        price: "$50",
        time: "10:00 AM",
        date: "Jan 10, 2025",
        location: "Main Hall",
        description: "Kickstart the event with a grand opening ceremony.",
        poster: "https://acpkhi.com/auc/17th/sessions/3.jpg",
      },
      {
        id: 2,
        name: "Keynote Speech",
        position: "Speaker",
        event: "Future Trends",
        price: "$100",
        time: "11:30 AM",
        date: "Jan 10, 2025",
        location: "Conference Room 1",
        description: "Discuss the future of technology with renowned experts.",
        poster: "https://via.placeholder.com/150",
      },
    ],
    "Day Two": [
      {
        id: 1,
        name: "Workshop on AI",
        position: "Instructor",
        event: "Hands-on AI",
        price: "$80",
        time: "10:00 AM",
        date: "Jan 11, 2025",
        location: "Lab 2",
        description: "Dive deep into artificial intelligence through hands-on practice.",
        poster: "https://via.placeholder.com/150",
      },
    ],
    "Day Three": [
      {
        id: 1,
        name: "Closing Ceremony",
        position: "Organizer",
        event: "Goodbye Event",
        price: "Free",
        time: "5:00 PM",
        date: "Jan 12, 2025",
        location: "Main Hall",
        description: "End the event with a heartwarming closing ceremony.",
        poster: "https://via.placeholder.com/150",
      },
    ],
  };

  // Speaker Data
  const speakers = [
    {
      id: 1,
      name: "Anwer Maqsood",
      image: "https://acpkhi.com/auc/16th/speakers/Anwer%20Maqsood.jpg",
      position: "Scriptwriter & Humorist",
    },
    {
      id: 4,
      name: "Abdullah Sultan",
      image: "https://acpkhi.com/auc/16th/speakers/Abdullah%20Sultan.jpg",
      position: "Tv Host & Anchor Person",
    },
    {
      id: 2,
      name: "Absa Komal",
      image: "https://acpkhi.com/auc/16th/speakers/Absa%20Komal.jpg",
      position: "Tv Host & Anchor Person",
    },
    {
      id: 3,
      name: "Amrita Devi",
      image: "https://acpkhi.com/auc/16th/speakers/Amrita%20Devi.jpg",
      position: "Poet",
    },
   
  ];

  return (
    <div className="bg-[#111827] text-white min-h-screen py-8 px-4">
            <div className="container mx-auto pt-[120px] px-4 sm:px-6 lg:px-8">

        <div className="bg-[#1F2937] py-6 mx-auto px-12 flex flex-col md:flex-row items-center space-y-8 ">
          {/* Left Section */}
          <div className="md:w-1/2 text-white">
            <h3 className="text-lg font-semibold mb-2">About Event</h3>
            <h2 className="text-3xl font-bold mb-4">
              17th Aalmi Urdu Conference - 2025
            </h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque scelerisque sem non eros tincidunt accumsan ut ac
              dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-300 transition duration-300">
              Register Now
            </button>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 h-[480px]">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/7UiH9MyZ6UY"
              title="Event Promotional Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Event Schedule</h2>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(eventData).map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-4 py-2 rounded-lg transition duration-300 text-sm md:text-base ${
                activeDay === day
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg hover:shadow-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventData[activeDay].map((event) => (
            <div
              key={event.id}
              className="bg-[#111827] p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col md:flex-row items-center">
                <img
                  src={event.poster}
                  alt={`${event.event} poster`}
                  className="w-full md:w-32 lg:w-full h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
                />
              
              </div>

              <div className="my-4 border-t border-gray-700"></div>

              <p className="font-bold text-lg text-center mb-2">{event.event}</p>

              <p className="text-gray-300 text-sm mb-4">{event.description}</p>

              <div className="flex flex-wrap justify-between text-sm text-gray-400">
                <p>{event.time}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>

              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                GET TICKET NOW - {event.price}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Speakers Section */}
      <div className="container mx-auto px-6 mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet the Speakers</h2>
        <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg hover:shadow-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-[#111827] p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">{speaker.name}</h3>
              <p className="text-gray-400 text-sm">{speaker.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
