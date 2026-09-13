import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b py-5 border-gray-200 font-jakarta">
      <nav className="">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex-1 md:flex-none md:hidden text-gray-700"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 sm:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 sm:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          <a
            href="#"
            className="flex shrink-0 justify-center items-center gap-1.5"
          >
            <img
              className="w-full max-w-24 md:max-w-34 shrink-0"
              src={logo}
              alt=""
            />
          </a>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <a href="#" className="text-sm  active:text-[#D91B7E]">
              Home
            </a>
            <a href="#technologies" className="text-sm text-[#475569]">
              Technologies
            </a>
            <a href="#" className="text-sm text-[#475569]">
              Projects
            </a>
            <a href="#" className="text-sm text-[#475569]">
              About
            </a>
            <a href="#" className="text-sm text-[#475569]">
              Contact
            </a>
          </div>

          <div className="flex items-center justify-end gap-3 flex-1 md:flex-none">
            <a
              href="#"
              className="text-[9px] md:text-sm font-medium text-gray-600"
            >
              Sign In
            </a>

            <a
              href="#"
              className="bg-pink-500 text-white text-[9px] md:text-sm font-medium px-2 sm:px-5 py-1 sm:py-2.5 rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 px-5 py-3 space-y-4 z-40 shadow-lg text-center md:flex-none">
            <a href="#" className="block text-sm text-pink-500">
              Home
            </a>
            <a href="#technologies" className="block text-sm font-medium text-[#475569]">
              Technologies
            </a>
            <a href="#" className="block text-sm font-medium text-[#475569]">
              Projects
            </a>
            <a href="#" className="block text-sm font-medium text-[#475569]">
              About
            </a>
            <a href="#" className="block text-sm font-medium text-[#475569]">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
