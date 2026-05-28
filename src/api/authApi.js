// src/api/authApi.js

// -----------------------------------------
// STEP 1
// VERIFY COMPANY
// -----------------------------------------

export const verifyCompany = async (
  formData
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",

        data: {
          company_id: 1,

          company_name:
            formData.companyName,

          token: "mock-company-token",
        },
      });
    }, 1500);
  });
};

// -----------------------------------------
// STEP 2
// SEND OTP
// -----------------------------------------

export const sendOtp = async (
  formData
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",

        data: {
          message:
            "OTP sent successfully",

          token: "mock-otp-token",
        },
      });
    }, 1500);
  });
};

// -----------------------------------------
// STEP 3
// VERIFY OTP
// -----------------------------------------

export const verifyOtp = async (
  otp
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // VALID OTP
      if (otp === "123456") {
        resolve({
          status: "success",

          data: {
            message:
              "OTP verified successfully",
          },
        });
      }

      // INVALID OTP
      else {
        reject({
          message: "Invalid OTP",
        });
      }

    }, 1500);
  });
};

// -----------------------------------------
// STEP 4
// COMPLETE PROFILE
// -----------------------------------------

export const completeProfile = async (
  formData
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",

        data: {
          message:
            "Profile completed successfully",
        },
      });
    }, 1500);
  });
};

// -----------------------------------------
// STEP 7
// FINAL REGISTRATION
// -----------------------------------------

export const registerUser = async (
  payload
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",

        data: {
          message:
            "Registration completed successfully",
        },
      });
    }, 2000);
  });
};