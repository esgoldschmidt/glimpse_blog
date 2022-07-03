import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../assets/images/glimpseblue.svg";

export default function Header() {
 const [animateHeader, setAnimateHeader] = useState(false);
 useEffect(() => {
   const listener = () => {
    if (window.scrollY > 75) {
      setAnimateHeader(true);
    } else setAnimateHeader(false);
   };
   window.addEventListener("scroll", listener);
   return () => {
     window.removeEventListener("scroll", listener);
   };
 }, []);
 const menuItems = [
   { title: "Home", url: "https://themeptation.net" },
   { title: "Products", url: "https://themeptation.net" },
   { title: "Contact", url: "https://themeptation.net" }
 ];
return (
 <header
      className={`w-full backdrop-filter backdrop-blur-lg bg-white fixed z-50 trasition ease-in-out duration-1000 ${
        animateHeader && "shadow-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto ">
        <div
          className={`flex max-w-screen-xl ${animateHeader ? "py-0" : "py-3"} mx-auto items-center justify-between px-8 trasition ease-in-out duration-1000`}
        >
            <div className='w-52'>
                <a href="/">
                    <div className={`transition smooth duration-1000 ease-in-out `}>
                        <img alt="company logo" id='logo' className={`transition smooth duration-1000 ease-in-out ${animateHeader ? "h-16" : "h-24"}`} src={logo.src} />
                    </div>
                </a>
            </div>
          <a
            href="https://themeptation.net"
            className="text-xl font-bold tracking-tighter text-indigo-400 pr-8"
          >
            Themeptation
          </a>
          <nav>
            <ul className="flex items-center justify-start">
              {menuItems?.map((item) => (
                <li key={item?.title}>
                  <Link href={item?.url}>
                    <a className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">
                      {item?.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
 );
}