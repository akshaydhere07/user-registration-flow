// Step2.jsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../api/authApi";

const Step2 = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [apiError, setApiError] = useState("");

  // -----------------------------------------
  // GET COMPANY DATA FROM STEP 1
  // -----------------------------------------

  const companyData = JSON.parse(
    localStorage.getItem("companyData")
  );

  const companyId =
    companyData?.data?.company_id || 1;

  const companyName =
    companyData?.data?.company_name ||
    "Woliba";

  // -----------------------------------------
  // REACT HOOK FORM
  // -----------------------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: companyName,
    },
  });

  // -----------------------------------------
  // SUBMIT FORM
  // -----------------------------------------

  const onSubmit = async (data) => {
    const response = await sendOtp(data);
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
          message:
            "OTP sent successfully! Please check your email.",

          token: "mock-otp-token-123456",
        },
      };

      console.log(
        "SUCCESS:",
        mockResponse
      );

      // -----------------------------------------
      // STORE USER DATA
      // -----------------------------------------

      localStorage.setItem(
        "userData",
        JSON.stringify({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          companyName: companyName,
          company_id: companyId,
        })
      );

      // -----------------------------------------
      // STORE OTP TOKEN
      // -----------------------------------------

      localStorage.setItem(
        "otpToken",
        mockResponse.data.token
      );

      // -----------------------------------------
      // GO TO STEP 3
      // -----------------------------------------

      navigate("/step-3");

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
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center px-4">
      
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
          
          {/* EMAIL */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              Email ID
            </label>

            <input
              type="email"
              placeholder="Enter email id"
              className={`w-full border rounded-md px-4 py-3 outline-none transition-all
              ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-pink-400"
              }`}
              {...register("email", {
                required:
                  "Email is required",

                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

                  message:
                    "Invalid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* FIRST NAME */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              First Name
            </label>

            <input
              type="text"
              placeholder="Enter first name"
              className={`w-full border rounded-md px-4 py-3 outline-none transition-all
              ${
                errors.firstName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-pink-400"
              }`}
              {...register("firstName", {
                required:
                  "First name is required",

                pattern: {
                  value:
                    /^[A-Za-z]+$/,

                  message:
                    "Only alphabets are allowed",
                },
              })}
            />

            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.firstName
                    .message
                }
              </p>
            )}
          </div>

          {/* LAST NAME */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Enter last name"
              className={`w-full border rounded-md px-4 py-3 outline-none transition-all
              ${
                errors.lastName
                  ? "border-red-500"
                  : "border-gray-300 focus:border-pink-400"
              }`}
              {...register("lastName", {
                required:
                  "Last name is required",

                pattern: {
                  value:
                    /^[A-Za-z]+$/,

                  message:
                    "Only alphabets are allowed",
                },
              })}
            />

            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.lastName
                    .message
                }
              </p>
            )}
          </div>

          {/* COMPANY NAME */}
          <div className="mb-8">
            <label className="block text-sm text-gray-700 mb-2">
              Company Name
            </label>

            <input
              type="text"
              disabled
              className="w-full border border-gray-300 rounded-md px-4 py-3 bg-gray-100 text-gray-500"
              {...register("companyName")}
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E36B77] hover:bg-[#d95b68] text-white font-medium py-3 rounded-md transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading
              ? "Please wait..."
              : "Verify Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step2;