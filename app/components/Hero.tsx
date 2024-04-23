import React from "react";

function Hero() {
  return (
    <div className="bg-offWhite relative h-80 xl:h-96">
      <img
        src="/images/hero-bg.png"
        className="absolute right-0 top-0 h-full"
      />
      <div className="mx-auto w-10/12 flex gap-5 justify-between relative">
        <div className="flex flex-col justify-center gap-4 text-black">
          <label className="uppercase font-bold text-sm">
            Welcome to new alumni
          </label>
          <h1 className="text-5xl xl:text-6xl font-bold">Welcome Home</h1>
          <p className="font-petrona ">
            Synergistically implement alternative webreadiness vis-a-vis
            resource maximizing vortals. Progressively pursue high-payoff
            leadership.
          </p>
          <button className="uppercase text-sm font-semibold w-fit bg-darkBlue py-3 xl:py-4 px-8 text-white rounded-md">Become a member</button>
        </div>
        <img src="/images/hero.png" className="h-80 xl:h-96" />
      </div>
    </div>
  );
}

export default Hero;
