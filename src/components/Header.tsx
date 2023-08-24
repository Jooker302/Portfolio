'use client';
import Link from "next/link";
import { useState,useEffect, useRef } from "react";

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })
  return (
    <div className="flex justify-between bg-gradient-to-r from-blue-500 to-green-600 items-center">
      <div>
        <p className="text-bold text-white m-2 ml-4 text-3xl">Portfolio</p>
      </div>

      <div className="hidden md:flex justify-center p-2 text-xl">
        <a href="#home" className="m-2 hover:text-gray-300">
          Home
        </a>
        {/* <a href="#aboutme" className='m-2'>About</a> */}
        <Link href="#about" className="m-2 hover:text-gray-300" scroll={false}>
          About
        </Link>
        <Link href="#stack" className="m-2 hover:text-gray-300" scroll={false}>
          My Stack
        </Link>
        <Link href="#project" className="m-2 hover:text-gray-300" scroll={false}>
          Projects
        </Link>
        <Link href="#contact" className="m-2 hover:text-gray-300" scroll={false}>
          Contact Me
        </Link>
      </div>


      <div className="md:hidden mr-4">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute  z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="px-4 bg-gray-100 rounded-xl py-2">
          <li>
            <Link href="#home" className="flex font-medium w-full text-blue-500 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="flex font-medium w-full text-green-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#stack" className="flex font-medium w-full text-blue-500 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              My Stack
            </Link>
          </li>
          <li>
            <Link href="#project" className="flex font-medium w-full text-green-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="flex font-medium w-full text-blue-500 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              Contact Me
            </Link>
          </li>
          <li>
            <Link href="#footer" className="flex font-medium w-full text-green-600 hover:text-gray-200 py-2 justify-center" onClick={() => setMobileNavOpen(false)}>
              My Socials
            </Link>
          </li>
          {/* <li>
            <Link
              href="/signup"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}
            >
              Sign up
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>

    </div>
  );
};

export default Header;
