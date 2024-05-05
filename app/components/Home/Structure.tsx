import React from "react";

function Structure() {
  const paths = [
    { image: "/images/execs.png", name: "Alumni Execs", cont: "View all" },
    { image: "/images/welfare.png", name: "Welfare", cont: "Read more" },
    { image: "/images/volunteer.png", name: "Volunteer", cont: "Read more" },
    { image: "/images/jobs.png", name: "Jobs", cont: "View all" }
  ];
  return (
    <div className="bg-offWhite py-16">
      <div className="mx-auto w-10/12 grid grid-cols-4 gap-5">
        {paths.map((path, index) => (
          <div className="flex flex-col gap-3 xl:gap-5  text-center">
            <img src={path.image} className="w-fit self-center" />
            <h1 className="text-2xl font-bold text-secHeader">{path.name}</h1>
            <p className="font-petrona xl:text-lg">
              Authoritatively administrate long-term high-impact e-business via
              parallel web services.
            </p>
            <a
              href=""
              className="uppercase block text-xs font-semibold text-[#999999]"
            >
              {path.cont}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Structure;
