"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

const DashboardLeftSideBar = () => {
  const sidebarData = [
    {
      id: 1,
      name: "Facebook",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      name: "Instagram",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
    },
    {
      id: 4,
      name: "Youtube",
      icon: <FaYoutube />,
    },
    {
      id: 5,
      name: "Threads",
      icon: <FaThreads />,
    },
  ];
  return (
    <div className="p-5 mt-10">
      <div className="text-white">
        {/* <Image src={logo} alt="logo" /> */}logo
      </div>
      <ul className="space-y-2 mt-10">
        <div className="flex items-center text-xl">
          <p>
            <MdDashboard />
          </p>
          <Link href="/">
            <li className="text-black px-6 py-2 rounded-xl">Dashboard</li>
          </Link>
        </div>

        {sidebarData.map((data, index) => (
          <div key={index}>
            <div className="grid grid-cols-3 items-center text-xl  justify-center">
              <div>
                <p>{data.icon}</p>
              </div>
              <div>
                <li className="text-black  py-2">{data.name}</li>
              </div>
              <div>
                <p className="flex justify-end">
                  <AiOutlinePlusCircle />
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DashboardLeftSideBar;
