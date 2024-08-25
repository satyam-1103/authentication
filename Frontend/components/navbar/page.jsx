"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Resources", url: "/notes" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Opportunities", url: "/opportunities" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <>
      <nav className="bg-primary fixed w-full z-20 top-0 start-0 h-50px bg-opacity-95">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="bg-opacity-0">
            <Image
              src="/logo-college-x-connect-removebg.png"
              width={200}
              height={70}
              alt="College Connect"
              id="college-logo"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            {session ? (
              <div className="flex gap-2 items-center justify-center">
                <Image
                  src={session.user.image}
                  alt="User Avatar"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <button
                  onClick={handleSignOut}
                  className="ml-2 px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Sign In
              </Link>
            )}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded={isOpen}
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      href={link.url}
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div
            className="items-center text-base-content justify-between hidden w-full md:flex md:w-auto md:order-1 -ml-24"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-8 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="block py-2 px-3 text-white rounded md:p-0"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
