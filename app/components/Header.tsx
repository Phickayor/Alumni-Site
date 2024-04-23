import React from "react";
import {
  BiMenu,
  BiSearch,
  BiSolidEnvelope,
  BiSolidPhone
} from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
const Header = () => {
  return (
    <div className="text-white w-full">
      <div className="bg-lightBlue mx-auto px-24 flex justify-end gap-8 py-4 [&>*]:cursor-pointer">
        <li>Our Donors</li>
        <li>Notice</li>
        <li>Transcript & Certificate</li>
      </div>
      <div className="bg-darkBlue px-24 flex justify-between">
        <img src="/images/logo.png" alt="" className="object-cover scale-75 " />
        <div className="flex gap-5">
          <div className="flex gap-4 [&>*]:self-center">
            <BiSolidPhone className="text-xl" />
            <div className="flex flex-col">
              <label>Call Us</label>
              <span>0126748869</span>
            </div>
          </div>
          <div className="flex gap-4 [&>*]:self-center">
            <BiSolidEnvelope className="text-xl" />
            <div className="flex flex-col">
              <label>Email Us</label>
              <span>info@newalumni.com</span>
            </div>
          </div>
        </div>
      </div>
      <ul className="mx-auto w-9/12 text-[#666666] font-semibold flex justify-around [&>*]:self-center py-8 text-sm">
        <li className="text-black">HOME</li>
        <li className="inline-flex [&>*]:self-center">
          ABOUT &nbsp; <FaAngleDown />
        </li>
        <li className="inline-flex [&>*]:self-center">
          DIRECTORY &nbsp; <FaAngleDown />
        </li>
        <li>FEEDBACK</li>
        <li>EVENTS</li>
        <li>NEWS</li>
        <li className="inline-flex [&>*]:self-center">
          RESOURCES &nbsp; <FaAngleDown />
        </li>
        <li>LINKS</li>
        <div className="flex gap-5 self-center [&>*]:self-center text-xl">
          <BiSearch />
          <BiMenu />
        </div>
      </ul>
    </div>
  );
};
export default Header;
