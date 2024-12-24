"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { socialLinks } from "../config";

const aboutMe = [
  { name: "Resume", href: "/resume", current: true },
  { name: "Projects", href: "/projects", current: false },
  { name: "Certificates", href: "/certificates", current: false },
];

const additional = [
  { name: "Blog", href: "/blog", current: false },
  { name: "Photos", href: "/photos", current: false },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy", current: false },
  { name: "Cookie Policy", href: "/cookies", current: false },
];

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType; // or a more specific type if applicable
};

export function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
    </div>
  );
}

export default function Footer() {
  return (
    <div
      className="size-full mt-20 border-t-4 bg-gray-950 border-gray-100 dark:border-gray-700
     -mb-5 text-centre md:text-left"
    >
      <div className="flex-auto mx-auto p-10 max-w-[1080px] w-full">
        <footer>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <nav>
              <h6 className="text-white font-semibold text-lg mb-4">
                About Me
              </h6>
              <ul className="space-y-2">
                {aboutMe.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:underline underline-offset-4 decoration-red-600
                                hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h6 className="text-white font-semibold text-lg mb-4">
                Additional
              </h6>
              <ul className="space-y-2">
                {additional.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:underline underline-offset-4 decoration-red-600
                                hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <h6 className="text-white font-semibold text-lg mb-4">Legal</h6>
              <ul className="space-y-2">
                {legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:underline underline-offset-4 decoration-red-600
                                hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </footer>

        <footer className="pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-3">
              <a href="/" className="text-sm">
                <h1
                  className="text-2xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-red-500 to-orange-500"
                >
                  Omkar Portfolio
                </h1>
                <br />
                <div
                  className="font-bold bg-clip-text text-transparent 
                bg-gradient-to-r from-red-500 to-orange-500 -mt-auto"
                >
                  Featuring my Portfolio and Skills
                </div>
              </a>
            </div>
            <div className="mt-4 md:mt-0">
              <h6 className="font-semibold text-lg mb-4">Socials</h6>
              <div className="flex space-x-4 text-gray-300">
                <SocialLinks />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
