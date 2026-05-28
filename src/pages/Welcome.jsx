// src/pages/Step8.jsx

import React from "react";
import welcome_icon from "../assets/welcome-icon.png";
export default function Step8() {
  // USER DATA
  const user = {
    firstName: "Akshay",
  };

  const handleGetStarted = () => {
    console.log("Get Started Clicked");

    // NAVIGATE TO DASHBOARD / LOGIN
    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-r from-[#dff7e7] via-[#f7f2d9] to-[#e8e9ff] blur-3xl opacity-60 rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-xl">
        
        {/* ICON */}
        <div className="flex justify-center mb-8">
          <img
            src={welcome_icon}
            alt="welcome_icon"
            className="w-[340px] md:w-[370px] object-contain"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-[#0B4B63] text-3xl md:text-4xl font-bold mb-5">
          Welcome {user.firstName}!
        </h1>

        {/* DESCRIPTION */}
        <p className="text-[#0B4B63] text-sm md:text-base leading-7 mb-8 px-2">
          Welcome to Woliba! You’ll find wellness
          challenges, fitness and recipe videos, and
          daily tips to support your health goals.
          Download our iOS or Android app and start
          your wellbeing journey today.
        </p>

        {/* BUTTON */}
        <button
          onClick={handleGetStarted}
          className="bg-[#df6b74] hover:bg-[#cf5962] transition text-white text-sm font-medium px-10 py-3 rounded-md shadow-sm"
        >
          Let’s get Started
        </button>
      </div>
    </div>
  );
}