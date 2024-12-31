import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressForm = ({ onSwitchForm }) => {
  const formik = useFormik({
    initialValues: {
      dob: "",
      country: "IN",
      address: "",
      zipCode: "",
    },
    validationSchema: Yup.object({
      dob: Yup.date().required("Date of Birth is required"),
      country: Yup.string().required("Country is required"),
      address: Yup.string().required("Address is required"),
      zipCode: Yup.string()
        .matches(/^[0-9]+$/, "Zip Code must contain only digits")
        .min(5, "Zip Code must be at least 5 digits")
        .required("Zip Code is required"),
    }),
    onSubmit: (values) => {
      console.log("Address Form values:", values);
      // Mock API call or logic
      onSwitchForm("set-password"); // Move to the "Set Password" step
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Sidebar */}
        <div className="w-1/3 bg-gray-100 p-6">
          <div className="flex flex-col items-center">
            <div className="text-blue-600 text-2xl font-bold mb-6">Please fill your address</div>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="font-semibold text-black">Your details</span>
                <p className="text-gray-500">Please provide your details information.</p>
              </li>
              <li>
                <span className="font-semibold text-black">Check your inbox</span>
                <p className="text-gray-500">Verify codes delivered to your inbox.</p>
              </li>
              <li className="font-bold text-black">
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
          <h1 className="text-2xl font-semibold text-gray-800">Your address</h1>
          <p className="text-gray-500 mt-2">Please provide your address information.</p>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth*</label>
              <input
                type="date"
                name="dob"
                value={formik.values.dob}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.dob && formik.errors.dob
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formik.touched.dob && formik.errors.dob && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.dob}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country*</label>
              <select
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.country && formik.errors.country
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              >
                <option value="IN">India</option>
                <option value="US">United States</option>
                {/* Add more countries as needed */}
              </select>
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.country}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address*</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.address && formik.errors.address
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Zip Code*</label>
              <input
                type="text"
                name="zipCode"
                placeholder="Enter your zip code"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full border rounded-lg px-4 py-2 mt-2 ${
                  formik.touched.zipCode && formik.errors.zipCode
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formik.touched.zipCode && formik.errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.zipCode}</p>
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

export default AddressForm;