// src/pages/Step5.jsx

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const interestData = [
  {
    category: "Individual Sports",
    options: ["Running", "Swimming", "Tennis", "Yoga"],
  },
  {
    category: "Ball Sports",
    options: ["Football", "Cricket", "Basketball"],
  },
  {
    category: "Wheel Sports",
    options: ["Cycling", "Skating"],
  },
  {
    category: "Combat Sports",
    options: ["Boxing", "Karate"],
  },
  {
    category: "Resistance Training",
    options: ["Gym", "Crossfit"],
  },
  {
    category: "Winter Sports",
    options: ["Skiing", "Snowboarding"],
  },
  {
    category: "Water Sports",
    options: ["Surfing", "Kayaking"],
  },
  {
    category: "Other Sports",
    options: ["Dance", "Meditation"],
  },
];

export default function Step5() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [error, setError] = useState("");

  // OPEN/CLOSE ACCORDION
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SELECT INTEREST
  const handleCheckbox = (option) => {
    setSelectedInterests((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      }

      return [...prev, option];
    });
  };

  // NEXT BUTTON
  const handleNext = () => {
    if (selectedInterests.length === 0) {
      setError("Please select at least one interest");
      return;
    }

    setError("");

    localStorage.setItem(
      "interests",
      JSON.stringify(selectedInterests)
    );

    navigate("/step-6");

    // API CALL OR NEXT STEP
  };

  // BACK BUTTON
  const handleBack = () => {
    console.log("Back Clicked");
  };

  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#fafafa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-sm">
        
        {/* TITLE */}
        <div className="pt-8 pb-6 px-6">
          <h2 className="text-center text-[#0B4B63] text-lg md:text-xl font-semibold">
            Select all wellness interests that apply —
            at least one is required.
          </h2>
        </div>

        {/* ERROR */}
        {error && (
          <div className="px-6 pb-4">
            <p className="text-sm text-red-500">
              {error}
            </p>
          </div>
        )}

        {/* ACCORDION SECTION */}
        <div className="px-6 md:px-8">
          {interestData.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-100"
            >
              {/* ACCORDION HEADER */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between py-5"
              >
                <span className="text-gray-500 text-sm md:text-[15px]">
                  {item.category}
                </span>

                {openIndex === index ? (
                  <ChevronUp
                    size={18}
                    className="text-[#f26b75]"
                  />
                ) : (
                  <ChevronDown
                    size={18}
                    className="text-[#f26b75]"
                  />
                )}
              </button>

              {/* ACCORDION BODY */}
              {openIndex === index && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-5">
                  {item.options.map((option, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(
                          option
                        )}
                        onChange={() =>
                          handleCheckbox(option)
                        }
                        className="w-4 h-4 accent-[#0B4B63]"
                      />

                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER BUTTONS */}
        <div className="border-t border-gray-100 mt-4 px-6 py-6 flex items-center justify-center gap-4">
          
          {/* BACK BUTTON */}
          <button
            onClick={handleBack}
            className="w-[130px] h-[42px] border border-[#f26b75] text-[#f26b75] rounded-md flex items-center justify-center gap-2 text-sm hover:bg-red-50 transition"
          >
            <ChevronLeft size={16} />
            Back
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={handleNext}
            disabled={selectedInterests.length === 0}
            className={`w-[130px] h-[42px] rounded-md text-sm transition ${
              selectedInterests.length === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#0B4B63] text-white hover:bg-[#08384a]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}