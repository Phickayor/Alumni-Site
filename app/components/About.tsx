import React from "react";

function About() {
  return (
    <div className="bg-offWhite py-14">
      <div className="mx-auto w-10/12 flex justify-between text-secText">
        <div className="flex flex-col justify-center gap-8 w-full">
          <h1 className="text-primaryHeader font-cabin text-3xl xl:text-4xl font-bold">
            Welcome to New Alumni Website
          </h1>
          <p className="font-petrona xl:text-lg">
            Conveniently orchestrate magnetic collaboration and idea-sharing
            without performance based total linkage. Dynamically deliver
            collaborative potentialities rather than cooperative collaboration
            and idea-sharing. Quickly morph efficient expertise for
            resource-leveling content. Conveniently deliver standards compliant
            meta-services before multimedia basedexpertise for resource-leveling
            content. Conveniently deliver standards compliConveniently
            orchestrate magnetic collaboration and idea-sharing without
            performance based total linkage. Dynamically
          </p>
        </div>
        <div className="w-full h-full flex flex-col justify-center gap-5">
          <img src="/images/about-hero.png" alt="" className="object-cover" />
          <div className="space-y-3 text-center">
            <h1 className="font-bold text-primaryHeader text-2xl">Moses Benjamin</h1>
            <label className="font-petrona">President</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
