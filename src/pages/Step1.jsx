// Step1.jsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { verifyCompany } from "../api/authApi";
const Step1 = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // -----------------------------------------
  // SUBMIT FORM
  // -----------------------------------------

  const onSubmit = async (data) => {
    const response = await verifyCompany(data);
    try {
      setLoading(true);

      setApiError("");

      // -----------------------------------------
      // MOCK API DELAY
      // -----------------------------------------

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      // -----------------------------------------
      // MOCK RESPONSE
      // -----------------------------------------

      const mockResponse = {
        status: "success",

        data: {
          company_id: 1,

          company_name: data.companyName,

          token: "mock-token-123",
        },
      };

      console.log(
        "SUCCESS:",
        mockResponse
      );

      // -----------------------------------------
      // SAVE DATA
      // -----------------------------------------

      localStorage.setItem(
        "companyData",
        JSON.stringify(mockResponse)
      );

      // -----------------------------------------
      // GO TO STEP 2
      // -----------------------------------------

      navigate("/step-2");

    } catch (error) {
      console.log(error);

      setApiError(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4">
      
      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        
        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-[#184B63] mb-8">
          Registration
        </h1>

        {/* API ERROR */}
        {apiError && (
          <div className="mb-5 bg-red-50 border border-red-200 text-red-500 text-sm px-4 py-3 rounded-md">
            {apiError}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          
          {/* COMPANY NAME */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              Company Name
            </label>

            <input
              type="text"
              placeholder="Enter company name"
              className={`w-full border rounded-md px-4 py-3 outline-none transition-all
              ${
                errors.companyName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-pink-400"
              }`}
              {...register("companyName", {
                required:
                  "Company name is required",
              })}
            />

            {errors.companyName && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.companyName
                    .message
                }
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">
              Company Password
            </label>

            <div className="relative">
              
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                className={`w-full border rounded-md px-4 py-3 outline-none transition-all
                ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-300 focus:border-pink-400"
                }`}
                {...register("password", {
                  required:
                    "Password is required",

                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d).{8,}$/,

                    message:
                      "Minimum 8 characters, 1 uppercase letter and 1 number required",
                  },
                })}
              />

              {/* TOGGLE PASSWORD */}
              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.password
                    .message
                }
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E36B77] hover:bg-[#d95b68] text-white font-medium py-3 rounded-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading
              ? "Please wait..."
              : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step1;