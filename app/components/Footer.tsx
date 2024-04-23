import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import {
  BiEnvelope,
  BiGlobe,
  BiLocationPlus,
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiSolidPhone
} from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-offWhite">
      <div className="mx-auto w-10/12 grid grid-cols-3 gap-8 text-primaryText">
        <div className="space-y-4 py-12">
          <img src="/images/logo.png" alt="" className="" />
          <p className="font-petrona">
            Interactively scale team building testing procedures visavis cost
            effective human capital.
          </p>
          <p className="font-petrona">
            Energistically synthesize resource leveling process improvements.
          </p>
          <button className="uppercase text-sm font-semibold w-fit bg-darkBlue py-3 px-8 text-white rounded-md">
            Become a member
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 xl:gap-10 py-12">
          <div className="space-y-3">
            <h1 className="text-xl xl:text-2xl font-bold text-primaryHeader">
              The Alumni
            </h1>
            <ul className="space-y-3 font-petrona">
              <li>About Us</li>
              <li>Directory</li>
              <li>Feedback</li>
              <li>Resources</li>
              <li>Clearance</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between h-4/5">
            <div className="space-y-3">
              <h1 className="text-xl xl:text-2xl font-bold text-primaryHeader">
                Quick Links
              </h1>
              <ul className="space-y-3 font-petrona">
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
                <li>Site Maps</li>
              </ul>
            </div>
            <div className="flex gap-3 [&>*]:self-center [&>*]:text-3xl text-darkBlue ">
              <BiLogoFacebook />
              <BiLogoTwitter />
              <AiFillInstagram />
              <BiLogoLinkedin />
            </div>
          </div>
        </div>
        <div className="bg-darkBlue text-white px-4 xl:px-10 flex flex-col gap-5 justify-center">
          <div className="flex gap-3 [&>*]:self-center py-4 border-b-2">
            <BiSolidPhone className="text-4xl" />
            <div className="space-y-2">
              <label className="text-white/70 text-sm xl:text-md">
                Emergency Number
              </label>
              <h3 className="text-xl xl:text-2xl font-bold">202-555-0104</h3>
            </div>
          </div>

          <ul className="flex flex-col gap-6 py-5">
            <li className="inline-flex gap-4 [&>*]:self-center">
              <BiEnvelope className="text-xl" />
              <span>info@newuualumni.com</span>
            </li>
            <li className="inline-flex gap-4 [&>*]:self-center">
              <BiGlobe className="text-xl" />
              <span>newunialumni.net</span>
            </li>
            <li className="inline-flex gap-4 [&>*]:self-center">
              <BiLocationPlus className="text-4xl" />
              <span>8572 Lockman Stravenue Apt. 173. United State</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
