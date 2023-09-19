"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white w-[100vw] border-gray-200 dark:bg-purple-400">
      <div className="mx-8  flex flex-wrap items-center justify-between py-5 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/"
            height={200}
            width={500}
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SwapnaYaan</span> */}
        </Link>
        <div className="flex items-center md:order-2">
          <ul className="flex mr-20 gap-16">
            <li>
              <Link
                href="#"
                className="block text-[20px] font-semibold hover:scale-105 transition transform ease-in-out duration-300 py-2 pl-3 pr-4 text-white bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-[20px] font-semibold hover:scale-105 transition transform ease-in-out duration-300 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="  hover:scale-105 transition transform ease-in-out duration-300 flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded={isUserDropdownOpen}
            onClick={toggleUserDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full "
              height={200}
              width={500}
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
          {/* Dropdown menu */}
          {isUserDropdownOpen && <UserDropdown />}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <UserMenu />
        </div>
      </div>
    </nav>
  );
}

function UserDropdown() {
  return (
    <div
      className="z-50 my-4 ml-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
    >
      <div className="px-4 py-3 ">
        <span className="block text-sm text-gray-900 dark:text-white">
          Bonnie Green
        </span>
        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
          swapnayaan@careers.com
        </span>
      </div>
      {/* <ul className="py-2" aria-labelledby="user-menu-button">
        <li>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
        </li>
        <li>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
        </li>
        <li>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

function UserMenu() {
  return (
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 ">
      {/* <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-white bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
      </li> */}
      {/* <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
      </li>
      <li>
        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li> */}
    </ul>
  );
}

export default Navbar;
