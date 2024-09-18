'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo/Logo";
import { headerData as data } from "./data/headerData";
import CloseIcon from "./icons/CloseIcon";
import HamburgerIcon from "./icons/HamburgerIcon";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
  
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);

    const pathname = usePathname();

    return (
        <nav className="w-full flex items-center justify-between px-10 py-5">
            <Logo />
            <div className="space-x-4 hidden md:flex">
                {data.general.map((item) => (
                <Link key={item.name}
                    href={item.href}
                    className={`hover:text-gray-400 transition-colors duration-300 font-extralight ${
                        pathname === item.href ? 'underline' : ''
                      }`}>
                    {item.name}
                </Link>
                ))}
            </div>
            <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            >
            {isOpen ? (
                <CloseIcon />
            ) : (
                <HamburgerIcon />
            )}
            </button>

            {isOpen && (
            <div className="md:hidden fixed inset-0 top-20 backdrop-blur-md w-full max-h-screen p-6 flex flex-col z-50 bg-opacity-90">
                <div className="w-full flex flex-col items-center space-y-4 sm:p-4">
                {data.general.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium hover:text-gray-400 transition-colors duration-300"
                    onClick={closeMenu}
                >
                    {item.name}
                </Link>
                ))}
                </div>
            </div>
            )}
        </nav>
    );
}

export default Navbar;
