import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddressForm from "./AddressForm"; // Import AddressForm

const SignupForm = ({ onSwitchForm }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country: "IN",
      occupation: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only digits")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
      occupation: Yup.string().required("Please select your occupation"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      // Mock API call or logic
      onSwitchForm("verify-email"); // Move to the "Verify Email" step
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6">
          <div className="flex flex-col items-center">
            <div className="text-blue-600 text-2xl font-bold mb-6">Your details</div>
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
              <li>
                <span className="font-semibold text-black">Choose a password</span>
                <p className="text-gray-500">Choose a secure password.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Successfully</span>
                <p className="text-gray-500">Go back to log in to your account.</p>
              </li>
            </ul>
          </div>
          <footer className="mt-10 text-center text-sm text-gray-500">
            <p>&copy; PetCare Connect 2025</p>
          </footer>
        </div>

        {/* Main Form */}
        <div className="w-2/3 p-10">
          <h1 className="text-2xl font-semibold text-gray-800">Your details</h1>
          <p className="text-gray-500 mt-2">Welcome! Please set your information.</p>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone number*</label>
              <div className="flex items-center">
                <select
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  className="border border-gray-300 rounded-l-lg px-4 py-2 bg-white focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option value="IN">IN</option>
                  <option value="US">US</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  placeholder="+91 1234567890"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full border rounded-r-lg px-4 py-2 ${
                    formik.touched.phone && formik.errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-200"
                  }`}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Occupation*</label>
              <select
                name="occupation"
                value={formik.values.occupation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.occupation && formik.errors.occupation
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              >
                <option value="">Select your occupation</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Other">Other</option>
              </select>
              {formik.touched.occupation && formik.errors.occupation && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.occupation}</p>
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

export default SignupForm;