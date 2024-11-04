"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "@/public/assets/logo/logo.png";
import Image from "next/image";



export const NevagationLink = ({ url, text }) => {
  return (
    <Link className="text-white hover:text-white" href={url}>
      {text}
    </Link>
  );
};

const DashboardTopBar = () => {
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


  return (
    <>
      <nav
        className={`sticky md:fixed top-0 z-10 w-full ${
          isScrolled ? "shadow-lg bg-[#156A6B]" : "bg-[#156A6B]"
        }`}
      >
        <div className="">
          <div>
            {/* <div className="lg:hidden flex pt-2 pb-1 justify-between items-center w-full">
              <div className="pl-4 ">
                <Link href="/">
                  <Image className="w-full h-[60px]" src={logo} alt="Logo" />logo
                </Link>
              </div>
              <div className="text-3xl">
                <MobileTopNavbar />
              </div>
            </div> */}

            <div className="hidden lg:block lg:px-2 xl:px-6 container justify-between w-full top-0 z-10">
              {/* <div className="flex items-center"> */}
              <div
                className="flex items-center 
               lg:gap-20 xl:gap-40"
              >
                <div className="h-[100px] w-[120px] flex items-center text-white">
                  <Link href="/">
                    <Image className="" src={logo} alt="Logo" />
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
                    <NevagationLink url="/" text="Analytics" />
                  </li>
                    <li
                      className={
                        router.asPath === "/planning"
                          ? "text-[16px] font-medium text-red-600"
                          : "text-[16px] font-medium text-white px-4 py-8 rounded-md"
                      }
                    >
                      <NevagationLink url="/planning" text="Planning" />
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

export default DashboardTopBar;

