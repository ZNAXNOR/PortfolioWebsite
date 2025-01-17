import React from "react";
import { FaXTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    platform: "Twitter",
    username: "@Omkar_Dalvi2004",
    href: "https://x.com/Omkar_Dalvi2004",
    logo: FaXTwitter,
    color: "#1DA1F2", // Twitter Blue
  },
  {
    platform: "GitHub",
    username: "ZNAXNOR",
    href: "https://github.com/ZNAXNOR",
    logo: FaGithub,
    color: "#171515", // GitHub Black
  },
  {
    platform: "Instagram",
    username: "@znaxnor",
    href: "https://www.instagram.com/znaxnor/",
    logo: FaInstagram,
    gradient:
      "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", // Instagram Gradient
  },
  {
    platform: "LinkedIn",
    username: "Omkar Dalvi",
    href: "https://www.linkedin.com/in/omkar-dalvi2004/",
    logo: FaLinkedinIn,
    color: "#0077B5", // LinkedIn Blue
  },
];

const SocialAvatar: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-8">
      {socialLinks.map((link, index) => {
        const Icon = link.logo;
        if (!link.href) return null; // Skip if `href` is undefined

        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-4 transition-transform transform hover:scale-105 ${
              index < socialLinks.length - 1 && "border-b pb-4"
            }`}
          >
            {/* Social Icon */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{
                background: link.gradient || link.color,
                backgroundImage: link.gradient ? link.gradient : undefined,
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Social Media Name and Username */}
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {link.platform}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {link.username}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialAvatar;
