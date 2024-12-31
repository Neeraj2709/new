import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SetPasswordForm = ({ onSwitchForm }) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Password values:", values);
      // Mock API call or logic
      onSwitchForm("signup-success"); // Move to the "Signup Success" step
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6">
          <div className="flex flex-col items-center">
            <div className="text-blue-600 text-2xl font-bold mb-6">Set Password</div>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-semibold text-black">Your details</span>
                <p className="text-gray-500">Please provide your details information.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Check your inbox</span>
                <p className="text-gray-500">Verify codes delivered to your inbox.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Your address</span>
                <p className="text-gray-500">Please provide your current address.</p>
              </li>
              <li className="font-bold text-black">
                <span className="font-semibold text-black">Choose a password</span>
                <p className="text-gray-500">Choose a secure password.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Successfully</span>
                <p className="text-gray-500">Go back to log in to your account.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Form */}
        <div className="w-2/3 p-10">
          <h1 className="text-2xl font-semibold text-gray-800">Set Password</h1>
          <p className="text-gray-500 mt-2">Please set your password.</p>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password*</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password*</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-700 transition"
            >
              Continue
            </button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-500">
            Already have an account?{" "}
            <button onClick={() => onSwitchForm("login")} className="text-blue-600 hover:underline">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SetPasswordForm;