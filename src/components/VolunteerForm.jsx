"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Enter a valid 10-digit phone number"),
  role: z.string().min(1, "Please select a volunteer role"),
});

export default function VolunteerForm({ onSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
    },
  });

  async function onSubmit(values) {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Call our Netlify function
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit volunteer form");
      }

      setSubmitMessage({
        type: "success",
        text:
          data.message ||
          "Thank you for volunteering! We'll contact you within 2-3 business days.",
      });
      reset();

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage({
        type: "error",
        text:
          error.message ||
          "Something went wrong. Please try again or email us directly at info@africandcc.org.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const volunteerRoles = [
    "Policy Research & Advocacy",
    "Mentorship",
    "Youth Leadership",
    "Community Outreach & Engagement",
    "Fundraising & Grant Writing",
    "Office & Event Support",
    "Social Media & Digital Outreach",
    "Media / Content Creation",
    "Volunteer Coordination",
  ];

  return (
    <div className="flex flex-col justify-center h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-full px-6 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-800 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-2 ml-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Role Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Volunteer Role <span className="text-red-500">*</span>
          </label>

          <select
            disabled={isSubmitting}
            className="w-full border border-gray-300 rounded-full px-6 py-4 focus:ring-2 focus:ring-amber-800 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
            {...register("role")}
          >
            <option value="" disabled>
              Select a role
            </option>
            {volunteerRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          {errors.role && (
            <p className="text-sm text-red-500 mt-2 ml-2">
              {errors.role.message}
            </p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              disabled={isSubmitting}
              className="w-full border border-gray-300 rounded-full px-6 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-800 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              disabled={isSubmitting}
              className="w-full border border-gray-300 rounded-full px-6 py-4 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-800 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm text-red-500 mt-2 ml-2">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <div
            className={`p-4 rounded-lg text-sm ${
              submitMessage.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 hover:bg-amber-800 cursor-pointer disabled:bg-gray-600 text-white py-4 rounded-full font-semibold text-lg transition-all duration-300 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
          <p className="text-sm text-gray-500 mt-3 text-center">
            We'll contact you within after reviewing your application. Thank
            you!
          </p>
        </div>
      </form>
    </div>
  );
}
