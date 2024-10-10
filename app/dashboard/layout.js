import localFont from "next/font/local";
import "./../globals.css";
import LandingTopNavbar from "@/components/Layout/LandingTopNavbar";
import DashboardContainer from "@/components/Dashboard/DashboardContainer";
import DashboardLeftSideBar from "@/components/Layout/DashboardLeftSideBar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Marketing Teritory",
  description: "Generated by create next app",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        {children}
       
      </body>
    </html>
  );
}
