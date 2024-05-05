import Link from "next/link";
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
    <div className="relative text-white w-full z-30">
      <div className="bg-lightBlue mx-auto px-24 flex justify-end gap-8 py-4 [&>*]:cursor-pointer">
        <Link href="">Our Donors</Link>
        <Link href="">Notice</Link>
        <Link href="">Transcript & Certificate</Link>
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
      <ul className="sticky top-0 bg-white mx-auto w-9/12 text-[#666666] font-semibold flex justify-around [&>*]:self-center py-4 text-sm xl:text-md">
        <Link href="/" className="text-black">HOME</Link>
        <Link href="" className="inline-flex [&>*]:self-center">
          ABOUT &nbsp; <FaAngleDown />
        </Link>
        <Link href="" className="inline-flex [&>*]:self-center">
          DIRECTORY &nbsp; <FaAngleDown />
        </Link>
        <Link href="">FEEDBACK</Link>
        <Link href="/events">EVENTS</Link>
        <Link href="">NEWS</Link>
        <Link href="" className="inline-flex [&>*]:self-center">
          RESOURCES &nbsp; <FaAngleDown />
        </Link>
        <Link href="">LINKS</Link>
        <div className="flex gap-5 self-center [&>*]:self-center text-xl">
          <BiSearch />
          <BiMenu />
        </div>
      </ul>
    </div>
  );
};
export default Header;
