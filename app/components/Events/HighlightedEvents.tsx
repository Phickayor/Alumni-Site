import React from "react";

function HighlightedEvents() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl text-secHeader font-bold">
        Highlighted Events(1)
      </h1>
      <div className="grid grid-cols-3">
        <div className="border w-full rounded-xl">
          <img src="/images/he1.png" className="w-full object-cover" />
          <div className="p-4 space-y-3">
            <h1 className="text-2xl text-secHeader font-bold">
              The Accelerating Clean Energy Transition with…
            </h1>
            <span className="block text-sm text-[#121215]">
              <b className="text-primaryHeader">Date: </b> March 22, 2024 12:00
              PM - 1:00 PM...
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
      </div>
    </div>
  );
}

export default HighlightedEvents;
