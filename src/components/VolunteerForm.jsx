"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

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
        text: "Thank you for volunteering! We'll contact you within 2-3 business days.",
      });
      reset();

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
    } catch (error) {
      console.log(error);
      setSubmitMessage({
        type: "error",
        text: "Something went wrong. Please try again or email us directly at info@africandcc.org.",
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
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm text-[#5C5548] mb-2 tracking-wide">
            Full name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            disabled={isSubmitting}
            className="w-full bg-transparent border-b border-[#9B8B78]/30 py-3 text-[#2C2A27] placeholder:text-[#9B8B78]/50 focus:outline-none focus:border-[#2C2A27] transition-colors disabled:opacity-50"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Role Dropdown */}
        <div>
          <label className="block text-sm text-[#5C5548] mb-2 tracking-wide">
            Volunteer Role
          </label>
          <select
            disabled={isSubmitting}
            className="w-full bg-transparent border-b border-[#9B8B78]/30 py-3 text-[#2C2A27] focus:outline-none focus:border-[#2C2A27] transition-colors disabled:opacity-50"
            {...register("role")}
          >
            <option value="" disabled className="text-[#5C5548]">
              Select a role
            </option>
            {volunteerRoles.map((role) => (
              <option key={role} value={role} className="text-[#2C2A27]">
                {role}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="text-xs text-rose-500 mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-[#5C5548] mb-2 tracking-wide">
              Email
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              disabled={isSubmitting}
              className="w-full bg-transparent border-b border-[#9B8B78]/30 py-3 text-[#2C2A27] placeholder:text-[#9B8B78]/50 focus:outline-none focus:border-[#2C2A27] transition-colors disabled:opacity-50"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-rose-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-[#5C5548] mb-2 tracking-wide">
              Phone
            </label>
            <input
              type="tel"
              placeholder="(123) 456-7890"
              disabled={isSubmitting}
              className="w-full bg-transparent border-b border-[#9B8B78]/30 py-3 text-[#2C2A27] placeholder:text-[#9B8B78]/50 focus:outline-none focus:border-[#2C2A27] transition-colors disabled:opacity-50"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-rose-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 ${
              submitMessage.type === "success"
                ? "bg-[#E5D9CC] text-[#2C2A27]"
                : "bg-rose-50 text-rose-800"
            }`}
          >
            <p className="text-sm">{submitMessage.text}</p>
          </motion.div>
        )}

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2C2A27] text-[#E5D9CC] py-4 hover:bg-[#9B8B78] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border border-[#E5D9CC] border-t-transparent rounded-full animate-spin"></span>
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </>
            )}
          </button>
          <p className="text-xs text-[#5C5548] mt-4 text-center">
            We'll contact you after reviewing your application.
          </p>
        </div>
      </form>
    </div>
  );
}
