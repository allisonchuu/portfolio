import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-cambridge-blue bg-opacity-20">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"}>
          <Image
            src="/images/strawberryicon.png"
            alt="strawberry icon image"
            className=""
            width={75}
            height={75}
          />
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar"></div>
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
