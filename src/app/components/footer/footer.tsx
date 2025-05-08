"use client";

import Link from "next/link";
import { Teachers } from "next/font/google";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export default function Footer() {
  return (
    <footer className="bg-[#EAEAEA] text-gray-800 py-2">
      <div className="container mx-auto px-4 flex flex-col justify-center min-h-[300px]">
        <div className="w-full flex flex-row justify-between items-start flex-nowrap">
          {/* Left side with logo and socials */}
          <div className="flex flex-col items-start space-y-4 w-1/4 min-w-[140px] pr-8">
            <h1 className={`text-4xl ${teachers.className} text-[#8f1229]`}>
              UMass Photo
            </h1>
            <p className="text-md text-gray-600">BUILD UMass 2025</p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="text-gray-700 hover:text-[#8f1229] transition-colors duration-200"
              >
                <FaFacebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#8f1229] transition-colors duration-200"
              >
                <FaInstagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#8f1229] transition-colors duration-200"
              >
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-[#8f1229] transition-colors duration-200"
              >
                <FaYoutube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Right side with horizontal navigation links */}
          <div className="flex justify-between flex-nowrap w-3/4 pl-8">
            {[
              {
                title: "Gallery",
                links: ["All Photos", "Submit Your Photos"],
                path: "/gallery",
              },
              {
                title: "Events",
                links: [
                  "Spring Contest",
                  "Fall Foliage Contest",
                  "Summer Contest",
                ],
                path: "/events",
              },
              {
                title: "Mission",
                links: ["Our Story", "E-Board"],
                path: "/about",
              },
              {
                title: "Contact",
                links: ["Email", "Instagram", "Campus Pulse", "Page"],
                path: "/contact",
              },
            ].map((section) => (
              <div key={section.title} className="space-y-2 min-w-[140px] px-4">
                <h2 className="text-md text-black font-semibold">
                  {section.title}
                </h2>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={section.path}
                        className="text-gray-700 hover:text-[#8f1229] transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
