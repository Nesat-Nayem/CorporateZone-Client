/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const pages = [
  {
    name: "About Us",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/about",
    icon: ChartBarIcon,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: ChartBarIcon,
  },
  {
    name: "Candidates",
    href: "/candidates",
    icon: CursorClickIcon,
  },
  {
    name: "Employers",
    href: "/employers",
    icon: ShieldCheckIcon,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: ViewGridIcon,
  },
  {
    name: "Contact us",

    href: "/contact",
    icon: RefreshIcon,
  },
];

export default function Navbar() {
  return (
    <Popover className="relative bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 lg:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <span className=" text-2xl font-extrabold  pl-3">
                  <span className="text-pink-500">Co</span>rporate Zo
                  <span className="text-cyan-500">ne</span>
                </span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden lg:flex space-x-10">
            <Link href="/about">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                About Us
              </a>
            </Link>
            <Link href="/jobs">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Jobs
              </a>
            </Link>

            <Link href="/candidates">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Candidates
              </a>
            </Link>
            <Link href="/employers">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Employers
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact Us
              </a>
            </Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="relative bottom-20 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a className="flex items-center">
                      <span className=" text-2xl font-extrabold  pl-3">
                        <span className="text-pink-500">Co</span>rporate Zo
                        <span className="text-cyan-500">ne</span>
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {pages.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="/signup">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Sign up
                  </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link href="/signin">
                    <a className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
