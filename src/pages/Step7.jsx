// Step7.jsx

import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import running_icon from "../assets/running-icon.png"
export default function Step7() {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // -----------------------------------------
  // REGISTRATION PROCESS
  // -----------------------------------------

  useEffect(() => {
    completeRegistration();
  }, []);

  // -----------------------------------------
  // COMPLETE REGISTRATION
  // -----------------------------------------

  const completeRegistration =
    async () => {
      try {
        setLoading(true);

        setError("");

        // -----------------------------------------
        // GET ALL STORED DATA
        // -----------------------------------------

        const companyData =
          JSON.parse(
            localStorage.getItem(
              "companyData"
            )
          );

        const userData =
          JSON.parse(
            localStorage.getItem(
              "userData"
            )
          );

        const interests =
          JSON.parse(
            localStorage.getItem(
              "interests"
            )
          );

        const wellbeingPillars =
          JSON.parse(
            localStorage.getItem(
              "wellbeingPillars"
            )
          );

        console.log({
          companyData,
          userData,
          interests,
          wellbeingPillars,
        });

        // -----------------------------------------
        // MOCK API DELAY
        // -----------------------------------------

        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              2500
            )
        );

        // -----------------------------------------
        // MOCK SUCCESS RESPONSE
        // -----------------------------------------

        const mockResponse = {
          status: "success",

          data: {
            message:
              "Registration completed successfully",
          },
        };

        console.log(
          "SUCCESS:",
          mockResponse
        );

        // -----------------------------------------
        // GO TO WELCOME PAGE
        // -----------------------------------------

        navigate("/welcome");

      } catch (error) {
        console.log(error);

        setError(
          "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      
      {/* LOADING */}
      {loading && (
        <div className="flex flex-col items-center justify-center">
          
          {/* ICON */}
          <div className="mb-6 animate-bounce">
            <img
              src={running_icon}
              alt="loading"
              className="w-[80px] h-[80px] object-contain"
            />
          </div>

          {/* TEXT */}
          <h2 className="text-[#0B4B63] text-xl font-semibold text-center leading-[32px]">
            Getting your wellness journey
            <br />
            ready...
          </h2>
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="text-center">
          
          <h2 className="text-red-500 text-xl font-semibold mb-4">
            Registration Failed
          </h2>

          <p className="text-gray-600 mb-5">
            {error}
          </p>

          {/* RETRY */}
          <button
            onClick={
              completeRegistration
            }
            className="px-6 py-3 bg-[#0B4B63] text-white rounded-md hover:bg-[#08384a] transition"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}