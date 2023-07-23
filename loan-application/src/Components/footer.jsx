import React from "react";
import Logo from "../Assests/Logo.svg";
import CallIcon from "../Assests/CallIcon.svg";
import MailIcon from "../Assests/MailIcon.svg";
import LocationIcon from "../Assests/LocationIcon.svg"

const Footer = () => {
  return (
    <div className="px-28 mt-10 bg-dark1">
      <div className="flex flex-row content-between pt-10 pb-10 w-full">
        <div className="flex flex-col pl-14 mr-40">
          <div>
            <img src={Logo} alt="Logo" className="h-16 mr-7" />
          </div>
          <div className="flex items-center mt-7">
            <img src={CallIcon} alt="Call Icon" className="h-5 mr-5" />
            <p className="text-white text-sm tracking-widest">+61490290309</p>
          </div>
          <div className="flex items-center mt-7">
            <img src={MailIcon} alt="Call Icon" className="h-4 mr-5" />
            <p className="text-white text-sm tracking-widest">lbasians@gmail.com</p>
          </div>
          <div className="flex items-center mt-7">
            <img src={LocationIcon} alt="Call Icon" className="h-5 mr-7" />
            <p className="text-white text-sm tracking-widest">LB Asians 1,84B cascades,Dr mawson lakes,Adelaide </p>
          </div>

          <div className="flex flex-row mt-5"></div>
        </div>
        <div className="flex flex-col mr-16">
          <div>
            <p className="font-semibold text-white ">Our Menu</p>
            <div className="w-5rem h-[1px] bg-light mt-2"></div>
          </div>
          <div className="mt-5 flex flex-row">
            <ul>
              <li className="text-white font-normal text-sm">
                Customer Charter
              </li>
              <li className="text-white mt-4 text-sm">Notice on FATCA</li>
              <li className="text-white mt-4 text-sm">
                Right to Information Act
              </li>
              <li className="text-white mt-4 text-sm">
                Correspondent Relationships
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mr-16 ml-16">
          <div>
            <p className="font-semibold text-white">Services</p>
            <div className="w-5rem h-[1px] bg-light mt-2"></div>
          </div>
          <div className="mt-5 flex flex-row">
            <ul>
              <li className="text-white font-normal text-sm">
                Serving Accounts
              </li>
              <li className="text-white mt-4 text-sm">Loan</li>
              <li className="text-white mt-4 text-sm">Credit & Debit card</li>
              <li className="text-white mt-4 text-sm">Home Sale system</li>
              <li className="text-white mt-4 text-sm">
                Leasing & Vehicle Sale system
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mr-16 ml-16">
          <div>
            <p className="font-semibold text-white">About Us</p>
            <div className="w-5rem h-[1px] bg-light mt-2"></div>
          </div>
          <div className="mt-5 flex flex-row">
            <ul>
              <li className="text-white font-normal text-sm">Who we are</li>
              <li className="text-white mt-4 text-sm">Corporate Values</li>
              <li className="text-white mt-4 text-sm">Awards & Recognitions</li>
              <li className="text-white mt-4 text-sm">Financial Highlights</li>
              <li className="text-white mt-4 text-sm">
                Money and Banking Museum
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" px-14">
        <div className="w-full h-[0.5px] bg-white"></div>
      </div>

      <div className="flex flex-row px-14 bg-dark1">
        <p className="text-sm mt-4 mb-7 text-white font-thin">
          Copyright © 2023 -FoodLabs - All Rights Reserved.
        </p>
        <div className="flex flex-row ml-[46rem]"></div>
      </div>
    </div>
  );
};

export default Footer;
