"use client";

import Link from "next/link";

const DashboardLeftSideBar = () => {
  return (
    <div className="p-5">
      <div className="text-white">
        {/* <Image src={logo} alt="logo" /> */}logo
      </div>
      <ul className="space-y-2 mt-10">
        <Link href="/">
          <li className="bg-white px-6 py-2 rounded-xl">Home</li>
        </Link>
        <li className="text-white px-6 py-2">Member</li>
        <li className="text-white px-6 py-2">User & Role</li>
      </ul>
    </div>
  );
};

export default DashboardLeftSideBar;
