// Step4.jsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValue = watch("password");

  const onSubmit = async (data) => {
  try {
    setLoading(true);

    // MOCK API DELAY
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    console.log(data);

    // SAVE DATA
    localStorage.setItem(
      "profileData",
      JSON.stringify(data)
    );

    // GO TO STEP 5
    navigate("/step-5");

  } catch (error) {
    console.log(error);
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
          Login Credentials
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* PASSWORD */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              Password
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
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                    message:
                      "Minimum 8 characters, 1 uppercase and 1 number required",
                  },
                })}
              />

              {/* EYE ICON */}
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
                {errors.password.message}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                className={`w-full border rounded-md px-4 py-3 outline-none transition-all
                ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300 focus:border-pink-400"
                }`}
                {...register(
                  "confirmPassword",
                  {
                    required:
                      "Confirm password is required",
                    validate: (value) =>
                      value === passwordValue ||
                      "Passwords do not match",
                  }
                )}
              />

              {/* EYE ICON */}
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {
                  errors.confirmPassword
                    .message
                }
              </p>
            )}
          </div>

          {/* BIRTHDAY */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              Birthday
            </label>

            <input
              type="date"
              className={`w-full border rounded-md px-4 py-3 outline-none transition-all
              ${
                errors.birthday
                  ? "border-red-500"
                  : "border-gray-300 focus:border-pink-400"
              }`}
              {...register("birthday", {
                required:
                  "Birthday is required",
              })}
            />

            {errors.birthday && (
              <p className="text-red-500 text-sm mt-1">
                {errors.birthday.message}
              </p>
            )}
          </div>

          {/* CONTACT NUMBER */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-2">
              Contact Number
            </label>

            <input
              type="text"
              placeholder="Enter contact number"
              className={`w-full border rounded-md px-4 py-3 outline-none transition-all
              ${
                errors.phone
                  ? "border-red-500"
                  : "border-gray-300 focus:border-pink-400"
              }`}
              {...register("phone", {
                required:
                  "Contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message:
                    "Enter valid 10-digit number",
                },
              })}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* TERMS */}
          <div className="mb-6">

            <label className="flex items-start gap-3 cursor-pointer">

              <input
                type="checkbox"
                className="mt-1"
                {...register("terms", {
                  required:
                    "Please accept terms & conditions",
                })}
              />

              <span className="text-sm text-gray-700">
                I agree to Woliba’s{" "}
                <span className="text-pink-500">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-pink-500">
                  Privacy Policy
                </span>
              </span>
            </label>

            {errors.terms && (
              <p className="text-red-500 text-sm mt-2">
                {errors.terms.message}
              </p>
            )}
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-200 mb-6"></div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            {/* BACK */}
            <button
              type="button"
              className="
              w-full
              border
              border-pink-400
              text-pink-500
              py-3
              rounded-md
              font-medium
              hover:bg-pink-50
              transition-all
              "
            >
              Back
            </button>

            {/* NEXT */}
            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              bg-[#E36B77]
              hover:bg-[#d95b68]
              text-white
              py-3
              rounded-md
              font-medium
              transition-all
              disabled:opacity-60
              "
            >
              {loading ? "Please wait..." : "Next"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default Step4;