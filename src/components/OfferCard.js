import React from "react";

const OfferCard = ({ image, title, category, organizer, link }) => {
  return (
    <div className="max-w-xs bg-gray-800 text-[#F5F1E1] rounded-lg shadow-md p-4 mx-auto">
      {/* Category */}
      <p className="text-sm text-[#F5F1E1] mb-2">{category}</p>

      {/* Title */}
      <h3 className="text-lg font-bold mb-4">{title}</h3>

      {/* Organizer */}
      <p className="text-sm text-[#F5F1E1] mb-6">{organizer}</p>

      {/* Event Poster */}
      <div className="h-40 bg-black flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Register Now Button */}
      <a
        href={link}
        className="block w-full bg-red-600 text-center text-[#F5F1E1] py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
      >
        Register Now
      </a>
    </div>
  );
};

export default OfferCard;
