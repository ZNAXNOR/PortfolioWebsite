import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { metaData, contactInfo, socialLinks } from "../config";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  DocumentDuplicateIcon,
  ComputerDesktopIcon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume",
};

export default function Resume() {
  return (
    <div>
      {/* Top */}
      <div className="lg:flex lg:items-center lg:justify-between px-8">
        {/* Left Side: Information */}
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
            Omkar's Resume
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MapPinIcon
                aria-hidden="true"
                className="mr-1.5 size-5 shrink-0 text-gray-400"
              />
              <strong>Location:</strong>India, Remote
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon
                aria-hidden="true"
                className="mr-1.5 size-5 shrink-0 text-gray-400"
              />
              <strong>Open to relocation:</strong> Yes
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <ClockIcon
                aria-hidden="true"
                className="mr-1.5 size-5 shrink-0 text-gray-400"
              />
              <strong>Notice:</strong> Immediate
            </div>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          {/* Dropdown */}
          <Menu as="div" className="relative mr-3">
            <MenuButton
              className="inline-flex items-center rounded-md bg-white px-3 py-2 
                text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 
                hover:ring-gray-400"
            >
              More
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 ml-1.5 size-5 text-gray-400"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right
                rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none 
                data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 
                data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <Link
                  href="certifications"
                  className="flex px-4 py-2 text-sm text-gray-700
                            data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  <DocumentDuplicateIcon
                    aria-hidden="true"
                    className="mr-1.5 size-5 text-gray-400"
                  />
                  Certifications
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="projects"
                  className="flex px-4 py-2 text-sm text-gray-700
                            data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  <ComputerDesktopIcon
                    aria-hidden="true"
                    className="mr-1.5 size-5 text-gray-400"
                  />
                  Projects
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>

          <Link href={socialLinks.resume} target="_blank">
            <span className="sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-orange-600 
                px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-orange-600"
              >
                Full Resume
                <ArrowTopRightOnSquareIcon
                  aria-hidden="true"
                  className="ml-1.5 -mr-0.5 size-5"
                />
              </button>
            </span>
          </Link>
        </div>
      </div>

      {/* Information */}
      <div className="mt-20">
        {/* Contact information */}
        <div className="sm:border border-gray-300 dark:border-gray-700 m-7 sm:p-8">
          <div>
            <h3 className="text-3xl font-semibold">Contact information</h3>
            <Link href="/contact" className="underline underline-offset-4">
              <p className="mt-1 max-w-2xl text-sm/6 text-gray-700 dark:text-gray-400">
                View full contact details here
              </p>
            </Link>
          </div>
          <div className="mt-6 sm:border-gray-100 bg-gray-100 rounded-md dark:bg-slate-700 sm:px-8">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Name</dt>
                <dd className="mt-1 text-sm/6  sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  {metaData.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium">Phone number</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  {contactInfo.phone}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Address</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  {contactInfo.address}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Career preferences */}
        <div className="sm:border border-gray-300 dark:border-gray-700 m-7 sm:p-8">
          <div>
            <h3 className="text-3xl font-semibold">Career preferences</h3>
          </div>
          <div className="mt-6 border-gray-100 bg-gray-100 rounded-md dark:bg-slate-700 sm:px-8">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Preferred locations</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <ul className="list-disc list-inside">
                    <li className="marker:text-orange-600">India</li>
                    <li className="marker:text-orange-600">Remote</li>
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Open to relocation</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  {metaData.openToRelocation}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Areas of Interest</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <ul className="list-disc list-inside">
                    <li className="marker:text-orange-600">Cloud</li>
                    <li className="marker:text-orange-600">Cloud Sales</li>
                    <li className="marker:text-orange-600">
                      Data Centre Operations
                    </li>
                    <li className="marker:text-orange-600">
                      Solutions Architect
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Skills & Experience */}
        <div className="sm:border border-gray-300 dark:border-gray-700 m-7 sm:p-8">
          <div>
            <h3 className="text-3xl font-semibold">Skills & Experience</h3>
            <Link href="/projects" className="underline underline-offset-4">
              <p className="mt-1 max-w-2xl text-sm/6 text-gray-700 dark:text-gray-400">
                View my projects here.
              </p>
            </Link>
          </div>
          <div className="mt-6 border-gray-100 bg-gray-100 rounded-md dark:bg-slate-700 sm:px-8">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Skills</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  {metaData.skills}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Experience</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <p>
                    <strong className="text-xl">Mangal Ki Recipe</strong>
                  </p>
                  <p>
                    <a className="text-sm dark:text-gray-400">
                      Lead Developer & Lead Coordinater for Youtuber Mangal Ki
                      Recipe since 2023.
                    </a>
                  </p>
                  <ul className="list-disc list-inside">
                    <li className="marker:text-orange-600">
                      <strong>Application Development:</strong> Led development
                      for a custom client application.
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>API Integration:</strong>Integrated YouTube API
                      for seamless video interaction.
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>Cloud & Database Management:</strong> Designed the
                      website on GCP, with MongoDB for a scalable infrastructure
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>Cloud Migration:</strong> Migrated the client
                      application to AWS Cloud.
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>Cloud Optimization:</strong> Optimized the
                      client's cloud resource utilization for their application
                      to minimize the cloud spend while ensuring a scalable
                      infrastructure.
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Job Offers Received</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <p>
                    <strong className="text-xl">
                      Data Center Security Manager, Amazon
                    </strong>
                  </p>
                  <p>
                    <a className="text-sm dark:text-gray-400">
                      Data Center Security Manager , DC Security (ID: 2720806).
                    </a>
                  </p>
                  <ul className="list-disc list-inside mt-1">
                    <li className="marker:text-orange-600">
                      <a className="inline-flex">
                        <strong>Company:</strong>
                        <Image
                          src="../logo/aws_logo.svg"
                          alt="AWS logo"
                          className="h-[35px]"
                        />
                        Amazon.
                      </a>
                    </li>
                    <li className="marker:text-orange-600 md:-mt-2">
                      <strong>Job Position:</strong>Data Center Security Manager
                      , DC Security
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>Job ID:</strong> 2720806
                    </li>
                  </ul>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Languages</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <ul className="list-disc list-inside">
                    <li className="marker:text-orange-600">
                      <strong>English:</strong> C1
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>Hindi:</strong> C2
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>Marathi:</strong> C2
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>French:</strong> A1
                    </li>
                    <li className="marker:text-orange-600">
                      <strong>German:</strong> A1
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Education */}
        <div className="sm:border border-gray-300 dark:border-gray-700 m-7 sm:p-8">
          <div>
            <h3 className="text-3xl font-semibold">Education</h3>
          </div>
          <Link href="/certifications" className="underline underline-offset-4">
            <p className="mt-1 max-w-2xl text-sm/6 text-gray-700 dark:text-gray-400">
              View certifications here.
            </p>
          </Link>
          <div className="mt-6 border-gray-100 bg-gray-100 rounded-md dark:bg-slate-700 sm:px-8">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Collage Name</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <p>Indian Institute of Technology, Madras (IITM)</p>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Education Level</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <p>Bachelors Degree</p>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm/6 font-medium ">Area of Study</dt>
                <dd className="mt-1 text-sm/6 sm:col-span-2 text-gray-700 dark:text-gray-200 sm:mt-0">
                  <p>Data Science and it's applications</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Attachment */}
        <div className="sm:border border-gray-300 dark:border-gray-700 m-7 sm:p-8">
          <div>
            <h3 className="text-3xl font-semibold">Attachment</h3>
          </div>
          <div className="mt-6 border-gray-100 rounded-md bg-gray-100 dark:bg-slate-700 p-8">
            <ul
              role="list"
              className="divide-y divide-gray-100 rounded-sm border border-gray-200 bg-white dark:bg-gray-800"
            >
              <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                <div className="flex min-w-20 flex-1 items-center">
                  <PaperClipIcon
                    aria-hidden="true"
                    className="size-5 shrink-0 text-gray-700 dark:text-gray-200"
                  />
                  <div className="ml-4 flex min-w-0 flex-1 gap-2">
                    <span className="truncate font-medium">resume.pdf</span>
                    <span className="shrink-0 text-gray-700 dark:text-gray-400">
                      940kb
                    </span>
                  </div>
                </div>
                <div className="ml-4 shrink-0">
                  <Link href={socialLinks.resume} target="_blank">
                    <button
                      className="flex justify-between font-medium rounded-full ring ring-orange-600 py-1 px-4
                            hover:bg-orange-100 dark:hover:bg-orange-200/100 text-orange-600 ms-3"
                    >
                      <ArrowDownTrayIcon
                        aria-hidden="true"
                        className="mx-auto md:mr-1.5 size-5 shrink-0 font-bold text-orange-600"
                      />
                      <p className="hidden sm:block underline">Download</p>
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
