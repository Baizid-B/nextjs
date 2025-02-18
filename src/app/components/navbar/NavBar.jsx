"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const links = [
    { href: "/", label: "home" },
    { href: "/post", label: "post" },
    { href: "/mealApi", label: "Meal" },
  ];

  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <nav className="py-4 bg-black text-white ">
        <ul className="flex justify-center items-center gap-4 capitalize">
          {links.map((link, index) => (
            <li key={index} className="relative group cursor-pointer">
              <Link href={link.href}>
                <span className="pb-1 relative hover:text-red-300 duration-500">
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
};

export default NavBar;
