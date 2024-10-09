"use client";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import Logo from "@/public/logo/Logo.png";
// import axios from "axios";

export const MenuData = () => {
  const router = useRouter();

  const handleScrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [expanded, setExpanded] = useState(null);
  const [nestedExpanded, setNestedExpanded] = useState({});

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const handleNestedChange =
    (parentPanel, nestedPanel) => (event, isExpanded) => {
      setNestedExpanded((prevState) => ({
        ...prevState,
        [parentPanel]: isExpanded ? nestedPanel : null,
      }));
    };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.dx.com.bd/api/ev/products"
        );
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (slug) => {
    router.push(`/product/${slug}`); 
  };

  return (
    <div>
      <ul className="mt-4">
        <div className="space-y-4 text-justify py-4">
          {/* Accordion for Product Information */}
          <Accordion
            expanded={expanded === "panelProduct"}
            onChange={handleChange("panelProduct")}
            className="rounded-md py-2"
          >
            <AccordionSummary
              expandIcon={
                expanded === "panelProduct" ? <RemoveIcon /> : <AddIcon />
              }
              aria-controls="panelProduct-content"
              id="panelProduct-header"
            >
              <p className="text-[16px] font-bold">Product</p>
            </AccordionSummary>
            <AccordionDetails>
              {/* Nested Accordion for EV Bike */}
              <Accordion
                expanded={nestedExpanded.panelProduct === "panelEV"}
                onChange={handleNestedChange("panelProduct", "panelEV")}
                className="rounded-md py-2"
              >
                <AccordionSummary
                  expandIcon={
                    nestedExpanded.panelProduct === "panelEV" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon />
                    )
                  }
                  aria-controls="panelEV-content"
                  id="panelEV-header"
                >
                  <p className="text-[16px] font-medium">EV Bike</p>
                </AccordionSummary>
                <AccordionDetails>
                  
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <div>
                     
                      {data.map((item) => (
                        <p
                          key={item.id}
                          className="mt-2 cursor-pointer"
                          onClick={() => handleProductClick(item.slug)} 
                        >
                          {item.name}
                          
                        </p>
                      ))}
                    </div>
                  )}
                </AccordionDetails>
              </Accordion>

              {/* Regular Bike Accordion */}
              <Accordion
                expanded={nestedExpanded.panelProduct === "panelRegular"}
                onChange={handleNestedChange("panelProduct", "panelRegular")}
                className="rounded-md py-2 mt-4"
              >
                <AccordionSummary
                  expandIcon={
                    nestedExpanded.panelProduct === "panelRegular" ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon />
                    )
                  }
                  aria-controls="panelRegular-content"
                  id="panelRegular-header"
                >
                  <p className="text-[16px] font-medium">Regular Bike</p>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Regular bike details here */}
                  <p className="mt-2">Details about Regular Bikes...</p>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* <li className="mb-2">
          <Link
            href="/about"
            className={
              router.asPath === "/about"
                ? "text-[18px] font-medium  text-red-600"
                : "text-[18px] font-medium "
            }
          >
            About Us
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/sustainability"
            className={
              router.asPath === "/sustainability"
                ? "text-[18px] font-medium  text-red-600"
                : "text-[18px] font-medium "
            }
          >
            Sustainability
          </Link>
        </li>

        <li className="mb-2">
          <Link
            href="/our-presence"
            className={
              router.asPath === "/our-presence"
                ? "text-[18px] font-medium  text-red-600"
                : "text-[18px] font-medium"
            }
          >
            Our Presence
          </Link>
        </li>
        <li className="mb-2">
          <Link
            href="/our-brand"
            className={
              router.asPath === "/our-brand"
                ? "text-[18px] font-medium  text-red-600"
                : "text-[18px] font-medium"
            }
          >
            Our Brand
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

/** main component */
const LandingMobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const date = new Date().getFullYear();

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <Drawer
        transitionDuration={900}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="w-80 p-5">
          <div className="flex justify-between items-center pb-2 border-b">
            <Image className="w-20" src={Logo} alt="" priority />

            <CloseIcon
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <ul>
            <div>
              {/* onClick={() => setOpen(false)} */}
              <MenuData />
            </div>
          </ul>
          <div>
            <p className="text-left pb-[22px] absolute bottom-0">
              © {date}, All Rights Reserved by DxNE
            </p>
            <div className="absolute bottom-4 text-left">
                <Link
                  href="https://www.numatrix.co/"
                  className="relative group cursor-pointer"
                >
                  <span className="">
                    Design & Developed by
                    <span className="text-xl font-bold text-blue-500  pl-[5px]">
                      N
                    </span>
                    <span className="text-xl font-bold">umatrix</span>
                  </span>
                </Link>
              </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default LandingMobileDrawer;
