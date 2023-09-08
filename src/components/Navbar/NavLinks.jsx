import Link from "next/link";
import React, { useState } from "react";
import { links } from "./NavLink";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function NavLinks() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between hover:text-blue-600 items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="md:hidden">
                {heading === link.name ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </span>
              <span className="md:block  hidden group-hover:rotate-180 ">
                
              <KeyboardArrowDownIcon />
                
              
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-1.5">
                    <div className="w-4 h-4 bg-white absolute rotate-45"></div>
                  </div>
                  <div className="bg-white ml-[-1rem] w-full p-4 flex gap-5 flex-wrap">
                    {link.sublinks.map((item, id) => (
                      <div className="p-3.5" key={id}>
                        <h1 className="text-lg font-semibold ">{item.Head}</h1>
                        {item.sublink.map((slink, sid) => (
                          <li
                            className="text-sm text-gray-600 my-2.5"
                            key={sid}
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-[#4A3AFF] hover:border-b-2"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile submenu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks?.map((slinks, id) => (
              <div key={id}>
                <div>
                  <h1
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-8 "
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                  >
                    {slinks.Head}
                    <span className="">
                {subHeading=== slinks.Head ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, sid) => (
                      <li className="py-3 pl-14" key={sid}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
