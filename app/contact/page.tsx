"use client";

import React, { useState } from "react";
import { contactInfo } from "../config";
import SocialAvatar from "../components/social-avatar";
import Link from "next/link";
import FAQSection from "./FAQ/page";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/omkarsdalvi1@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };


  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center px-8 py-12 lg:px-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Get in touch
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Reach out to me through the following contact information.
          </p>
          <div className="mt-8 space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <span>📍</span>
              <Link href={contactInfo.addressMap}>
                <p className="text-gray-700 dark:text-gray-300">{contactInfo.address}</p>
              </Link>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <span>📞</span>
              <p className="text-gray-700 dark:text-gray-300">{contactInfo.phone}</p>
            </div>
            {/* Social Links */}
            <SocialAvatar />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg rounded-md bg-white dark:bg-gray-800 p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-3xl font-semibold text-orange-600">Thank You!</h3>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Your message has been successfully submitted. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">Contact Me</h2>
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Company (Optional)"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextAreaField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-orange-600 px-4 py-2 text-white font-medium hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  Let's talk
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <FAQSection />
    </section>
  );
};

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-2 block w-full rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>
);

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      id={name}
      rows={4}
      value={value}
      onChange={onChange}
      required={required}
      className="mt-2 block w-full rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
    ></textarea>
  </div>
);


export default Contact;
