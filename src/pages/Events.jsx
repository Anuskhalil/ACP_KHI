import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Events() {
    const [events, setEvents] = useState([]); // Store events fetched from the API
    const [expandedStates, setExpandedStates] = useState([]); // Handle expanded/collapsed states

    // Fetch events from the backend API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://10.10.10.231:5000/get_events'); // Replace with your API URL
                const startDate = await response.json();
                setEvents(startDate);

                // Initialize expanded states (first event expanded by default)
                setExpandedStates(startDate.map((_, index) => index === 0));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    // Calculate the remaining time until the event date
    const calculateTimeRemaining = (startDate) => {
        const now = new Date().getTime();
        const eventTime = new Date(startDate).getTime();
        const timeDifference = eventTime - now;

        if (timeDifference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // If event has passed
        }

        return {
            days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
        };
    };

    const [countdowns, setCountdowns] = useState([]);

    // Update the countdown for each event every second
    useEffect(() => {
        const interval = setInterval(() => {
            if (events.length > 0) {
                const updatedCountdowns = events.map(event => calculateTimeRemaining(event.startDate));
                setCountdowns(updatedCountdowns);
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [events]);

    // Format the event date to a readable format
    const formatDate = (dateString) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Toggle expanded/collapsed state for an event
    const toggleExpand = (index) => {
        setExpandedStates(prevStates =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <div className="bg-[#111827] text-white min-h-screen py-8 px-4">
            <div className="container mx-auto pt-[120px] px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
                    <p className="text-lg text-gray-300">
                        Explore our upcoming events and register to be part of something special.
                    </p>
                </div>

                {events.length === 0 ? (
                    <p className="text-center text-gray-300">No events available at the moment.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-10">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="bg-[#1F2937] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Toggle Button */}
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleExpand(index)}
                                >
                                    <h3 className="text-2xl font-bold text-[#FFFFFF]">
                                        {event.name}
                                    </h3>
                                    <button>
                                        {expandedStates[index] ? (
                                            <FaChevronUp className="text-white text-xl" />
                                        ) : (
                                            <FaChevronDown className="text-white text-xl" />
                                        )}
                                    </button>
                                </div>

                                {/* Event Details */}
                                {expandedStates[index] && (
                                    <div className="mt-4">
                                        <div className="flex flex-col md:flex-row items-center md:items-start">
                                            <div className="w-full md:w-1/2 lg:w-2/3 md:pr-6">
                                                <img
                                                    src={event.poster}
                                                    alt={event.name}
                                                    className="w-full object-cover rounded-lg mb-4 shadow-md"
                                                />
                                            </div>

                                            <div className="w-full md:w-1/2 lg:w-1/3">
                                                <p className="text-sm text-[#FFFFFF]-600 mb-2">
                                                    <span className="font-bold">Date:</span> {formatDate(event.startDate)}
                                                </p>
                                                <p className="text-1xl text-[#FFFFFF]-600 mb-2">
                                                    <span className="font-bold">Venue:</span> {event.venue}
                                                </p>
                                                <p className="text-1xl text-[#FFFFFF]-600 mb-2">
                                                    <span className="font-bold">Opening Time:</span> {event.openingTime}
                                                </p>

                                                {/* Countdown */}
                                                <div className="flex flex-wrap justify-center md:justify-start space-x-4 bg-[#2d3748] py-4 px-4 rounded-lg">
                                                    <div className="text-center">
                                                        <h6 className="text-3xl font-bold text-white">
                                                            {countdowns[index]?.days || 0}
                                                        </h6>
                                                        <p className="text-sm text-gray-400">Days</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <h6 className="text-3xl font-bold text-white">
                                                            {countdowns[index]?.hours || 0}
                                                        </h6>
                                                        <p className="text-sm text-gray-400">Hours</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <h6 className="text-3xl font-bold text-white">
                                                            {countdowns[index]?.minutes || 0}
                                                        </h6>
                                                        <p className="text-sm text-gray-400">Minutes</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <h6 className="text-3xl font-bold text-white">
                                                            {countdowns[index]?.seconds || 0}
                                                        </h6>
                                                        <p className="text-sm text-gray-400">Seconds</p>
                                                    </div>
                                                </div>

                                                {/* Register/Buy Tickets Button */}
                                                <div className="mt-6">
                                                    <button
                                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                                                            event.free
                                                                ? "bg-green-600 hover:bg-green-700 text-white"
                                                                : "bg-blue-600 hover:bg-blue-700 text-white"
                                                        }`}
                                                    >
                                                        {event.free ? "Register Now" : "Buy Tickets"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Events;
