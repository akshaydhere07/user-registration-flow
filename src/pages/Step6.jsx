// src/pages/Step6.jsx

import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pillarsData = [
  {
    title: "Physical Wellbeing",
    description:
      "Energy, movement, sleep, and routine care",
  },
  {
    title: "Mental Wellbeing",
    description:
      "Clarity, focus, and mindfulness",
  },
  {
    title: "Emotional Wellbeing",
    description:
      "Resilience, self-awareness, and stress regulation",
  },
  {
    title: "Social Wellbeing",
    description:
      "Relationships and meaningful connection",
  },
  {
    title: "Intellectual Wellbeing",
    description:
      "Growth, creativity, and learning",
  },
  {
    title: "Occupational Wellbeing",
    description:
      "Purpose, performance, and work-life balance",
  },
  {
    title: "Spiritual Wellbeing",
    description:
      "Values, meaning, and inner alignment",
  },
  {
    title: "Environmental Wellbeing",
    description:
      "Healthy, safe, and productive surroundings",
  },
  {
    title: "Purpose & Contribution",
    description:
      "Giving back and living with meaning",
  },
  {
    title: "Longevity",
    description:
      "A sustainable, healthy lifestyle for the long term",
  },
  {
    title: "Nutritional Wellbeing",
    description:
      "Fueling your body and brain with intention",
  },
  {
    title: "Financial Wellbeing",
    description:
      "Security, budgeting, and long-term stability",
  },
];

export default function Step6() {
  const navigate = useNavigate();
  const [selectedPillars, setSelectedPillars] = useState([]);
  const [error, setError] = useState("");

  // HANDLE CHECKBOX
  const handleCheckbox = (title) => {
    if (selectedPillars.includes(title)) {
      setSelectedPillars((prev) =>
        prev.filter((item) => item !== title)
      );

      return;
    }

    // LIMIT ONLY 3
    if (selectedPillars.length >= 3) {
      setError("You can select only 3 wellbeing pillars");
      return;
    }

    setError("");

    setSelectedPillars((prev) => [...prev, title]);
  };

  // DONE BUTTON
  const handleDone = () => {
    if (selectedPillars.length !== 3) {
      setError("Please select exactly 3 wellbeing pillars");
      return;
    }

    setError("");

    localStorage.setItem(
  "wellbeingPillars",
  JSON.stringify(selectedPillars)
);

navigate("/step-7");

    // NEXT STEP / API CALL
  };

  // BACK BUTTON
  const handleBack = () => {
    console.log("Back clicked");
  };

  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#fafafa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-2xl shadow-sm">
        
        {/* TITLE */}
        <div className="pt-8 pb-6 px-6">
          <h2 className="text-center text-[#0B4B63] text-lg md:text-xl font-semibold">
            Select any 3 well-being pillars goal you want to achieve
          </h2>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="px-6 pb-4">
            <p className="text-sm text-red-500">
              {error}
            </p>
          </div>
        )}

        {/* GRID */}
        <div className="px-6 md:px-8 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillarsData.map((pillar, index) => (
              <label
                key={index}
                className={`border rounded-sm p-4 cursor-pointer transition min-h-[92px]
                ${
                  selectedPillars.includes(pillar.title)
                    ? "border-[#0B4B63] bg-[#f5fbfd]"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  
                  {/* CHECKBOX */}
                  <input
                    type="checkbox"
                    checked={selectedPillars.includes(
                      pillar.title
                    )}
                    onChange={() =>
                      handleCheckbox(pillar.title)
                    }
                    className="mt-1 w-4 h-4 accent-[#0B4B63]"
                  />

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-[#0B4B63] text-sm font-semibold">
                      {pillar.title}
                    </h3>

                    <p className="text-[11px] text-gray-400 mt-1 leading-[18px]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="border-t border-gray-100 px-6 py-6 flex items-center justify-center gap-4">
          
          {/* BACK BUTTON */}
          <button
            onClick={handleBack}
            className="w-[130px] h-[42px] border border-[#f26b75] text-[#f26b75] rounded-md flex items-center justify-center gap-2 text-sm hover:bg-red-50 transition"
          >
            <ChevronLeft size={16} />
            Back
          </button>

          {/* DONE BUTTON */}
          <button
            onClick={handleDone}
            disabled={selectedPillars.length !== 3}
            className={`w-[130px] h-[42px] rounded-md text-sm transition ${
              selectedPillars.length !== 3
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#0B4B63] text-white hover:bg-[#08384a]"
            }`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}