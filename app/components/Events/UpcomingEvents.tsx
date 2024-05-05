import React from "react";

function UpcomingEvents() {
  const events = ["", "", "", "", "", ""];
  return (
    <div className=" flex flex-col gap-4">
      <h1 className="text-2xl text-secHeader font-bold">Upcoming Events(10)</h1>
      <div className="grid grid-cols-3 gap-5">
        {events.map(() => (
          <div className="border w-full rounded-xl">
            <img src="/images/he1.png" className="w-full object-cover" />
            <div className="p-4 space-y-3">
              <div className="flex gap-3">
                <div className="bg-white shadow-2xl h-12 w-20 self-center"></div>
                <h1 className="text-lg xl:text-xl text-secHeader font-bold">
                  The Accelerating Clean Energy Transition with…
                </h1>
              </div>
              <span className="block text-sm text-[#121215]">
                <b className="text-primaryHeader">Date: </b> March 22, 2024
                12:00 PM - 1:00 PM...
              </span>
              <div className="flex flex-wrap gap-2 [&>*]:border-2">
                <label className="rounded-xl font-bold text-xs px-4 py-2 self-center text-primaryHeader">
                  Alumni Community
                </label>
                <label className="rounded-xl font-bold text-xs px-4 py-2 self-center text-primaryHeader">
                  Environment/Sustainability
                </label>
                <label className="rounded-xl font-bold text-xs px-4 py-2 self-center text-primaryHeader">
                  Virtual
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-darkBlue text-white self-center py-4 px-12 rounded-lg font-semibold text-sm uppercase">Load More</button>
    </div>
  );
}

export default UpcomingEvents;
