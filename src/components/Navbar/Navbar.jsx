"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logos.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg">
      <div className="flex items-center font-medium justify-around ">
        <div className="z-50 p-2 md:w-auto w-full flex justify-between">
          <Link href={"/"}>
            <Image
              src={logo}
              width={180}
              alt="logo"
              className="md:cursor-pointer h-14"
            />
          </Link>
          <div
            className="p-1.5 bg-slate-300 m-3 rounded-md border-neutral-950 border-1 md:hidden"
            onClick={() => setOpen(!open)}
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
        <div className=" lg:block hidden">
          <Button />
        </div>
        {/* Mobive nav */}
        <ul
          className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
                duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
        >
          <NavLinks setOpen={setOpen}/>
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

          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
