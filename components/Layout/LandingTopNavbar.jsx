"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
// import logo from "../../public/logo/Logo.png";
import Image from "next/image";
import MobileDrawer from "@/components/Layout/LandingMobileDrawer";
// import ProductPublic from "../Product/ProductPublic";

const MobileTopNavbar = () => {
  return (
    <nav className="top-0 w-full border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex justify-between">
          <div className="ml-3 flex items-center">
            <MobileDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export const NevagationLink = ({ url, text }) => {
  return (
    <Link className="text-white hover:text-white" href={url}>
      {text}
    </Link>
  );
};

const LandingTopNavbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`sticky md:fixed top-0 z-10 w-full ${
          isScrolled ? "shadow-lg bg-[#222121]" : "bg-[#222121]"
        }`}
      >
        <div className="container mx-auto">
          <div>
            <div className="lg:hidden flex pt-2 pb-1 justify-between items-center w-full">
              <div className="pl-4 ">
                <Link href="/">
                  {/* <Image className="w-full h-[60px]" src={logo} alt="Logo" /> */}logo
                </Link>
              </div>
              <div className="text-3xl">
                {/* <MobileTopNavbar /> */}
              </div>
            </div>

            <div className="hidden lg:block lg:px-2 xl:px-6 container justify-between w-full top-0 z-10">
              {/* <div className="flex items-center"> */}
              <div
                className="flex items-center justify-between
               lg:gap-20 xl:gap-40"
              >
                <div className="h-[100px] w-[120px] flex items-center text-white">
                  <Link href="/">
                    {/* <Image className="" src={logo} alt="Logo" /> */}Logo
                  </Link>
                </div>

                <div>
                  <ul className="lg:flex gap-[20px]">
                    <li
                    className={
                      router.asPath === "/"
                        ? "text-[16px] font-medium text-red-600"
                        : "text-[16px] font-medium text-white px-4 py-8 rounded-md"
                    }
                  >
                    <NevagationLink url="/" text="Home" />
                  </li>
                    <li
                      className={
                        router.asPath === "/login"
                          ? "text-[16px] font-medium text-red-600"
                          : "text-[16px] font-medium text-white px-4 py-8 rounded-md"
                      }
                    >
                      <NevagationLink url="/login" text="Login" />
                    </li>
                    <li
                      className={
                        router.asPath === "/dashboard"
                          ? "text-[16px] font-medium text-red-600"
                          : "text-[16px] font-medium text-white px-4 py-8 rounded-md"
                      }
                    >
                      <NevagationLink url="/dashboard" text="Register" />
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingTopNavbar;
