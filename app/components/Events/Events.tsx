import React from "react";
import SubHeader from "../SubHeader";
import { BiCaretDown, BiListOl, BiLocationPlus } from "react-icons/bi";
import HighlightedEvents from "./HighlightedEvents";
import UpcomingEvents from "./UpcomingEvents";

function Events() {
  return (
    <div className="flex flex-col gap-10">
      <SubHeader headerName={"All Events"} />
      <div className="grid grid-cols-4 mx-auto w-11/12 xl:w-10/12 gap-5">
        <div className="col-span-3 grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label className="font-bold">Search for events</label>
            <div className="bg-offWhite rounded-lg p-3 flex justify-between">
              <input
                type="text"
                placeholder="Type a keyword or select one or more options"
                className="bg-inherit text-primaryText w-full self-center"
              />
              <BiCaretDown className="text-[#2B2B2B] self-center text-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold">Search by location</label>
            <div className="bg-offWhite rounded-lg p-3 flex gap-5">
              <BiLocationPlus className="text-[#2B2B2B] self-center text-2xl" />
              <input
                type="text"
                placeholder="Type and select a location"
                className="bg-inherit text-primaryText w-full self-center"
              />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex gap-2 self-end text-xs xl:text-sm">
          <button className="bg-darkBlue text-white p-3 rounded-lg w-full">
            Clear all filters
          </button>
          <button className="bg-darkBlue text-white p-3 rounded-lg w-full inline-flex justify-around">
            <BiListOl className="self-center text-xl" />
            <span className="self-center">List</span>
            <BiCaretDown className="self-center text-2xl" />
          </button>
        </div>
      </div>
      <div className="mx-auto w-11/12 xl:w-10/12 space-y-8">
        <div className="flex gap-3 text-sm">
          <button className="border-2 hover:border-none hover:text-white hover:bg-darkBlue rounded-lg px-5 py-2">
            Past
          </button>
          <button className="hover:border-2 hover:text-black text-white hover:bg-white bg-darkBlue rounded-lg px-5 py-2">
            Upcoming
          </button>
          <button className="border-2 hover:border-none hover:text-white hover:bg-darkBlue rounded-lg px-5 py-2">
            This Week
          </button>
        </div>
        <HighlightedEvents />
        <UpcomingEvents />
      </div>
    </div>
  );
}

export default Events;
