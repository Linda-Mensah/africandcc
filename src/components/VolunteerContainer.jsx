"use client";

import { useState } from "react";
import VolunteerModal from "./VolunteerModal";

export const VolunteerContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="volunteer">
        <div className="w-full mt-[90px] md:mt-[100px] lg:mt-[120px] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-stretch">
            <div className="relative h-[280px] md:h-auto min-h-90">
              <img
                src="adcc-hero-img.jpg"
                alt="Volunteers"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-8">
              <h2 className="text-center md:text-start font-bold text-3xl mb-4">
                Become a Volunteer
              </h2>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Join our team of dedicated volunteers and make a meaningful
                impact in your community. We have various roles available to
                match your skills and interests.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gray-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 w-full md:w-auto"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <VolunteerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
