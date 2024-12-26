"use client";

import { ThemeSwitch } from "./theme-switch";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Contact Me", href: "/contact", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Photos", href: "/photos", current: false },
];

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const pathname = usePathname();
  return (
    <div className=" flex-auto mx-auto mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[1080px] w-full">
      <Disclosure as="nav">
        <div className="pb-20 sm:px-10">
          <div className="mx-auto space-x-4 my-auto max-w-7xl sm:px-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center tablet:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton
                  className="group relative inline-flex items-center justify-center 
                                  rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 
                                  dark:hover:bg-gray-700 hover:text-black dark:hover:text-white 
                                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>

              <div className="flex flex-1 items-center justify-center tablet:items-stretch tablet:justify-start">
                {/* Title */}
                <div className="flex shrink-0 items-center">
                  <Link href="/">
                    <strong className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                      Omkar Portfolio{" "}
                    </strong>
                  </Link>
                </div>
                {/* Navigation Menu */}
                <div className="hidden tablet:ml-10 tablet:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? "bg-orange-600 text-white"
                            : "hover:underline underline-offset-4 decoration-red-600 hover:text-gray-600 dark:hover:text-gray-300",
                          "rounded-md px-3 py-2 text-sm font-medium shrink-0"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="absolute inset-y-0 right-0 flex items-center pr-2 tablet:static tablet:inset-auto 
                              space-x-4 tablet:ml-6 tablet:pr-0"
              >
                <Link href="/resume">
                  <span className="tablet:ml-3">
                    <button
                      type="button"
                      className={classNames(
                        pathname === "/resume"
                          ? "bg-gradient-to-r text-white shadow-sm from-red-400 via-orange-600 to-red-600 focus-visible:outline"
                          : "bg-gray-200 dark:bg-gray-600",
                            "px-1 tablet:px-3 py-2 text-sm font-semibold",
                            "inline-flex items-center rounded-md text-center",                            
                            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      )}
                    >
                      <DocumentTextIcon
                        aria-hidden="true"
                        className={classNames(
                          pathname === "/resume"
                            ? "text-white stroke-2 tablet:mr-1.5 size-5 shrink-0"
                            : "tablet:mr-1.5 size-5 shrink-0"
                        )}
                      />                      
                      <p className="hidden tablet:block">Resume</p>
                    </button>
                  </span>
                </Link>
                <ThemeSwitch />
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-orange-600 text-white"
                      : "hover:underline underline-offset-4 decoration-red-600 text-gray-600 dark:text-gray-400",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  );
}
