"use client";

import React, { useState } from "react";
import { socialLinks, contactInfo } from "../config";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://formsubmit.co/omkarsdalvi1@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true); // Show the thank-you message
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  type SocialLinkProps = {
    href: string;
    icon: React.ComponentType;
  };

  function SocialLink({ href, icon: Icon }: SocialLinkProps) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon />
      </Link>
    );
  }

  function SocialLinks() {
    return (
      <div className="flex text-2xl gap-6 transition-opacity duration-300 hover:opacity-90 pt-10">
        <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
        <SocialLink href={socialLinks.github} icon={FaGithub} />
        <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
        <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col justify-center px-8 py-12 lg:px-16">
          <h2 className="text-4xl font-semibold">Get in touch</h2>
          <p className="mt-4">
            Reach out to me through the following contact information.
          </p>
          <div className="mt-8 space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <span>📍</span>
              <Link href={contactInfo.addressMap}>
                <p>{contactInfo.address}</p>
              </Link>
            </div>
            {/* Contact */}
            <div className="flex items-center space-x-4">
              <span>📞</span>
              <p>{contactInfo.phone}</p>
            </div>
            {/* Socials */}
            <SocialLinks />
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex flex-col justify-center px-8 py-12 lg:px-16 bg-gray-200 dark:bg-gray-700 rounded-md">
          {isSubmitted ? (
            // Thank You Message
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-orange-600">
                Thank You!
              </h3>
              <p className="mt-4">
                Your message has been successfully submitted. I will get back to
                you soon.
              </p>
            </div>
          ) : (
            // Contact Form
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl font-semibold">Contact Me</h2>
              {/* Name */}
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2.5 w-full rounded-md bg-white text-black px-3.5 py-2 text-base 
                  outline outline-1 outline-gray-300 focus:outline-orange-600"
                />
              </div>
              {/* Company */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2.5 w-full rounded-md bg-white text-black px-3.5 py-2 text-base 
                  outline outline-1 outline-gray-300 focus:outline-orange-600"
                />
              </div>
              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2.5 w-full rounded-md bg-white text-black px-3.5 py-2 text-base 
                  outline outline-1 outline-gray-300 focus:outline-orange-600"
                />
              </div>
              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2.5 w-full rounded-md bg-white text-black px-3.5 py-2 text-base 
                  outline outline-1 outline-gray-300 focus:outline-orange-600"
                ></textarea>
              </div>
              {/* Button */}
              <button
                type="submit"
                className="mt-10 w-full rounded-md bg-orange-600 px-3.5 py-2.5 
                      text-center text-sm font-semibold text-white hover:bg-orange-500"
              >
                Let's talk
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
