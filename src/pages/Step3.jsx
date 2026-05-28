// Step3.jsx

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();

  // -----------------------------------------
  // STATES
  // -----------------------------------------

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [timer, setTimer] =
    useState(30);

  // INPUT REFS
  const inputRefs = useRef([]);

  // -----------------------------------------
  // TIMER
  // -----------------------------------------

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () =>
      clearInterval(interval);
  }, [timer]);

  // -----------------------------------------
  // HANDLE OTP CHANGE
  // -----------------------------------------

  const handleChange = (
    value,
    index
  ) => {
    // ONLY NUMBER
    if (!/^\d?$/.test(value))
      return;

    const updatedOtp = [...otp];

    updatedOtp[index] = value;

    setOtp(updatedOtp);

    // AUTO FOCUS NEXT
    if (
      value &&
      index < 5
    ) {
      inputRefs.current[
        index + 1
      ].focus();
    }
  };

  // -----------------------------------------
  // HANDLE BACKSPACE
  // -----------------------------------------

  const handleKeyDown = (
    e,
    index
  ) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[
        index - 1
      ].focus();
    }
  };

  // -----------------------------------------
  // VERIFY OTP
  // -----------------------------------------

const handleVerifyOtp =
  async () => {
    try {
      setLoading(true);

      setError("");

      const enteredOtp =
        otp.join("");

      // VALIDATION
      if (
        enteredOtp.length !== 6
      ) {
        setError(
          "Please enter 6 digit OTP"
        );

        return;
      }

      // MOCK API DELAY
      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            1500
          )
      );

      // SUCCESS
      console.log(
        "OTP Verified Successfully"
      );

      // GO TO STEP 4
      navigate("/step-4");

    } catch (error) {
      console.log(error);

      setError(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  // -----------------------------------------
  // RESEND OTP
  // -----------------------------------------

  const handleResendOtp =
    async () => {
      try {
        setLoading(true);

        setError("");

        // MOCK API DELAY
        await new Promise(
          (resolve) =>
            setTimeout(
              resolve,
              1200
            )
        );

        // RESET TIMER
        setTimer(30);

        alert(
          "OTP resent successfully"
        );

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
        <h1 className="text-3xl font-bold text-center text-[#184B63] mb-3">
          OTP Verification
        </h1>

        {/* SUBTITLE */}
        <p className="text-center text-gray-500 text-sm mb-8">
          Enter the 6-digit OTP
          sent to your email
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-5 bg-red-50 border border-red-200 text-red-500 text-sm px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        {/* OTP INPUTS */}
        <div className="flex justify-center gap-3 mb-8">
          {otp.map(
            (
              digit,
              index
            ) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) =>
                  (inputRefs.current[
                    index
                  ] = el)
                }
                onChange={(e) =>
                  handleChange(
                    e.target.value,
                    index
                  )
                }
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    index
                  )
                }
                className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg font-semibold outline-none focus:border-pink-400"
              />
            )
          )}
        </div>

        {/* VERIFY BUTTON */}
        <button
          onClick={
            handleVerifyOtp
          }
          disabled={loading}
          className="w-full bg-[#E36B77] hover:bg-[#d95b68] text-white font-medium py-3 rounded-md transition-all disabled:opacity-70"
        >
          {loading
            ? "Please wait..."
            : "Verify OTP"}
        </button>

        {/* RESEND */}
        <div className="text-center mt-6">
          {timer > 0 ? (
            <p className="text-sm text-gray-500">
              Resend OTP in{" "}
              <span className="font-semibold text-[#184B63]">
                {timer}s
              </span>
            </p>
          ) : (
            <button
              onClick={
                handleResendOtp
              }
              className="text-sm text-[#E36B77] font-medium hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step3; 