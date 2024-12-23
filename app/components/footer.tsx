"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { metaData, socialLinks } from "../config";

const YEAR = new Date().getFullYear();

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
      <a href="/rss.xml" target="_self">
        <FaRss />
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <div>
      <footer className="border-t-4 border-gray-100 dark:border-gray-700 p-10 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <nav>
            <h6 className="font-semibold text-lg mb-4">About Me</h6>
            <ul className="space-y-2">
              <li>
                <a href="/resume" className="hover:underline">
                  Resume
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="/certificates" className="hover:underline">
                  Certificates
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="font-semibold text-lg mb-4">Additional</h6>
            <ul className="space-y-2">
              <li>
                <a href="/blogs" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/photos" className="hover:underline">
                  Photos
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <h6 className="font-semibold text-lg mb-4">Legal</h6>
            <ul className="space-y-2">
              <li>
                <a href="privacy" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="cookies" className="hover:underline">
                  Cookie policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      <footer className="border-t border-gray-100 dark:border-gray-700 px-10 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3">
            <a href="/" className="text-sm">
              <h1 className="text-2xl font-bold">Omkar Portfolio</h1>
              <br />
              Featuring my Portfolio and Skills
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <h6 className="font-semibold text-lg mb-4">Socials</h6>
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
