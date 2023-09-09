"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../assets/logos.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={`bg-white shadow-lg fixed w-full `}>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-2 md:w-auto w-full flex justify-between">
          <Link href={"/"}>
            <Image
              src={logo}
              width={180}
              height="auto"
              alt="logo"
              className="md:cursor-pointer h-14"
            />
          </Link>
          <div
            className="p-1.5 bg-slate-300 m-3 rounded-md border-neutral-950 border-1 md:hidden"
            onClick={toggleMenu}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        {/* Desktop Nav */}
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
          <li>
            <Link
              className="py-7 inline-block px-3 hover:text-blue-600"
              href={"/"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="py-7 inline-block px-3 hover:text-blue-600"
              href={"/"}
            >
              CAREER
            </Link>
          </li>
        </ul>
        <div className="lg:block hidden">
          <Button />
        </div>
        {/* Mobile Nav */}
        <div
          className={`md:hidden fixed w-full h-full top-20 left-0 duration-500 transition-transform transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="bg-white w-full h-full p-4">
            <NavLinks setOpen={setOpen} />
            <li>
              <Link 
                className="block py-3 px-4 hover:text-blue-600"
                href={"/"}
                onClick={()=>setOpen(!open)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-4 hover:text-blue-600"
                href={"/"}
                onClick={()=>setOpen(!open)}
              >
                CAREER
              </Link>
            </li>
            <li>
              <Button />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
