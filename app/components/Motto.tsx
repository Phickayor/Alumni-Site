import React from "react";

function Motto() {
  const events = [
    {
      text: "Various versions have evolved over the years",
      date: "July 11, 2018 7:00 am - 6:00 pm"
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      date: "Aug 25, 2018 10:00 am - 6:00 pm"
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      date: "July 11, 2018 7:00 am - 6:00 pm"
    }
  ];
  return (
    <div className="mx-auto w-10/12 grid grid-cols-3 gap-5 py-14">
      <div className="grid grid-cols-2 gap-8 col-span-2">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-secHeader">Our Mission</h2>
          <p className="font-petrona xl:text-lg text-primaryText">
            Assertively engage optimal web-readiness rather than economically
            sound action items. Monotonectally conceptualize enabled e- business
            whereas value-added solutions. Synergistically synergize focused.
          </p>
          <a
            href=""
            className="uppercase block text-xs font-semibold text-[#999999]"
          >
            Read More
          </a>
        </div>
        <img src={"/images/mission.png"} className="rounded-lg self-center" />
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold text-secHeader">Our Vision</h2>
          <p className="font-petrona xl:text-lg text-primaryText">
            Assertively engage optimal web-readiness rather than economically
            sound action items. Monotonectally conceptualize enabled e- business
            whereas value-added solutions. Synergistically synergize focused.
          </p>
          <a
            href=""
            className="uppercase block text-xs font-semibold text-[#999999]"
          >
            Read More
          </a>
        </div>
        <img src={"/images/vision.png"} className="rounded-lg self-center" />
      </div>
      <div className="bg-[#1E2226] text-white px-5 xl:px-10 flex flex-col justify-center gap-5 rounded-lg">
        {events.map((event, index) => (
          <div className="flex flex-col border-b py-5 space-y-3" key={index}>
            <h3 className="xl:text-lg">{event.text}</h3>
            <p className="text-[#CCCCCC] text-xs xl:text-sm">{event.date}</p>
          </div>
        ))}
        <a
          href=""
          className="uppercase block text-xs font-semibold text-[#999999]"
        >
          View all Events
        </a>
      </div>
    </div>
  );
}

export default Motto;
