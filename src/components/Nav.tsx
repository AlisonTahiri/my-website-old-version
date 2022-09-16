import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { useTheme } from "next-themes";

import { navLinks } from "../lib/data";
import ToggleDarkBtn from "./ToggleDarkBtn";
import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const [language, setLanguage] = useState(router.locale);

  const handleClick = () => {
    router.push("/");
    setOpen(false);
  };

  return (
    <div className="fixed z-10 w-full">
      <nav className="flex z-20 absolute items-center justify-between w-full h-16 px-6 bg-customlight dark:bg-darkgray">
        <div className="flex space-x-1">
          {/* Logo */}
          <button
            onClick={handleClick}
            className="text-2xl transition-all duration-300 lg:link-underline text-text hover:text-primary"
          >
            Alison Tahiri
          </button>

          <select
            value={language}
            className="text-2xl bg-transparent"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <Link href="/" locale="en">
              <option className="text-2xl bg-transparent" value="en">
                &#127482;&#127480;
              </option>
            </Link>
            <Link href="/" locale="al">
              <option className="text-2xl" value="al">
                &#127462;&#127473;
              </option>
            </Link>
            <Link href="/" locale="it">
              <option className="text-2xl" value="it">
                &#127470;&#127481;
              </option>
            </Link>
            {/* <Link href="/" locale="tr">
              <option className="text-2xl" value="al">
                &#127481;&#127479;
              </option>
            </Link> */}
          </select>
          <ToggleDarkBtn
            theme={theme}
            setTheme={(theme: string) => setTheme(theme)}
          />
        </div>
        {/* Links screen > 768px */}
        <div className="hidden space-x-3 text-xl md:flex text-text">
          {navLinks.map((link) => {
            const { name, href, offset } = link;
            return (
              <LinkS
                to={href}
                offset={offset}
                spy={true}
                activeClass="active"
                key={name}
                className="cursor-pointer link-underline"
              >
                {name}
              </LinkS>
            );
          })}
          <a
            href="/alison-tahiri-resume.pdf"
            target="_blank"
            rel="noopener"
            aria-label="link to my resume"
            className="font-semibold transition-colors duration-300 cursor-pointer text-text hover:text-primary"
          >
            CV
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          type="button"
          className="relative order-3 w-5 h-6 cursor-pointer md:hidden group"
        >
          <span
            className={`transition-all duration-300 absolute h-1 w-full bg-primary group-hover:bg-hv hover:bg-hv rounded-lg left-0 top-1 ${
              open ? "rotate-135 top-3" : "rotate-0"
            }`}
          ></span>
          <span
            className={`absolute transition-all duration-300 h-1 w-full bg-primary group-hover:bg-hv rounded-lg left-0 top-3 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`transition-all duration-300 absolute h-1 w-full group-hover:bg-hv bg-primary rounded-lg left-0 ${
              open ? "-rotate-135 top-3" : "rotate-0 top-5"
            }`}
          ></span>
        </button>
      </nav>
      {/* Links screen < 768px */}
      <div
        className={`${
          open ? "" : "-translate-y-72"
        }  transition-all duration-300 absolute z-10 left-0 flex flex-col items-center justify-around w-full py-4 text-xl  bg-primary text-white top-16 text-text md:hidden`}
      >
        {navLinks.map((link) => {
          const { name, href, offset } = link;
          return (
            <LinkS
              onClick={() => {
                setOpen(false);
              }}
              to={href}
              offset={-60}
              spy={true}
              activeClass="active"
              key={name}
              className="m-2 cursor-pointer link-underline"
            >
              {name}
            </LinkS>
          );
        })}
        <a
          href="/alison-tahiri-resume.pdf"
          target="_blank"
          rel="noopener"
          aria-label="link to my resume"
          className="font-bold text-white transition-colors duration-300 cursor-pointer"
        >
          CV
        </a>
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="w-screen h-screen transition-opacity duration-1000 bg-gray-900 bg-opacity-60"
        />
      )}
    </div>
  );
};

export default Nav;
