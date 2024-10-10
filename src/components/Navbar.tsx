"use client";
import React, { useState, useEffect } from "react";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { SiFoodpanda } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="mt-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="flex gap-2 items-center text-2xl bg-[#313f4f] p-2 rounded-md">
            <SiFoodpanda size={35} color="#308fca" />
            <Link href="/">Jersey Panda</Link>
          </h1>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm   rounded-lg md:hidden text-[24px] focus:outline-none "
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenuFold size={40} />
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="about"
                  className="block py-2 px-3 text-[20px] lg:w-full hover:bg-[#313f4f] w-36 text-white rounded md:border-0"
                >
                  About us
                </Link>
              </li>
              <li>
                <a
                  href="jersey"
                  className="block py-2 px-3 text-[20px] lg:w-full hover:bg-[#313f4f] w-36 text-white rounded md:border-0"
                >
                  jersey
                </a>
              </li>
              <li>
                <a
                  href="custom-jersey"
                  className="block py-2 px-3 text-[20px] lg:w-full hover:bg-[#313f4f]  w-48 text-white rounded md:border-0"
                >
                  Custom-jersey
                </a>
              </li>
              <li>
                <Link
                  href="gallery"
                  className="block py-2 px-3 text-[20px] lg:w-full hover:bg-[#313f4f] w-36 text-white rounded md:border-0"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="football-item"
                  className="block py-2 px-3 text-[20px] lg:w-full hover:bg-[#313f4f] w-48 text-white rounded md:border-0"
                >
                  Football Item
                </Link>
              </li>
              <li>
                <a
                  href="tel:+880263627"
                  className="p-2 flex items-center gap-2 text-[20px] lg:w-full bg-[#1982C4] w-44 text-white rounded md:border-0"
                >
                  <MdOutlinePermPhoneMsg /> 01819575345
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isScrolled && (
        <div className="fixed bottom-10 right-10 z-50">
          <a
            href="https://wa.me/+880 1845-692696"
            target="_blank"
            rel="noopener noreferrer"
            className=" p-3 rounded-full shadow-lg text-white"
          >
            <FaWhatsapp
              size={50}
              className="p-2 text-[#25D366] bg-[#313f4f] rounded-md"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
