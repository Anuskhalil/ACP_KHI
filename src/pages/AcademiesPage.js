import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import departmentImg1 from "../assets/academies/Communication Design.webp"; // Replace with actual image paths
import departmentImg2 from "../assets/academies/textile-design.webp";
import departmentImg3 from "../assets/academies/textile-design.webp";
import sliderImg1 from "../assets/academies/ACP Drone 2023.webp"; // Replace with actual slider images
import sliderImg2 from "../assets/academies/Music.webp";
import academicImg from "../assets/academies/dance.webp"; // Replace with the academic image

const AcademiesPage = () => {
  const departments = [
    { id: 1, name: "Graphic Design", description: "See More", image: departmentImg1 },
    { id: 2, name: "Dance", description: "See More", image: departmentImg2 },
    { id: 3, name: "Fine Arts", description: "See More", image: departmentImg3 },
    { id: 4, name: "Textile Design", description: "See More", image: departmentImg1 },
    { id: 5, name: "Theatre", description: "See More", image: departmentImg2 },
    { id: 6, name: "Music", description: "See More", image: departmentImg3 },
  ];

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Slider Section */}
        <div className="mb-12">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <SwiperSlide>
              <img src={sliderImg1} alt="Slider 1" className="w-full h-[400px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderImg2} alt="Slider 2" className="w-full h-[400px] object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Academics Section */}
        <div className="flex flex-col lg:flex-row items-center bg-gray-800 p-6 rounded-lg mb-12">
          <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <div className="bg-gray-300 w-[300px] h-[400px] shadow-lg rounded-lg">
              {/* Image replacing the placeholder */}
              <img src={academicImg} alt="Academics" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Academics</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              scelerisque sem non eros tincidunt accumsan ut ac dolor.
            </p>
          </div>
        </div>

        {/* Departments Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department) => (
              <div
                key={department.id}
                className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-4 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="w-full h-[200px]">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mt-4">{department.name}</h3>
                <p className="text-gray-600 mt-1">{department.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademiesPage;
