import React from "react";

function Blog() {
  const detailedArticles = ["/images/blog-1.png", "/images/blog-2.png"];
  const others = [
    {
      text: "Lorem ipsum dolor sit amet",
      date: "July 25, 2018",
      place: "Campaign, Computer"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur.",
      date: "Aug 25, 2018",
      place: "Library, School"
    },
    {
      text: "Lorem ipsum dolor sit amet",
      date: "July 11, 2018",
      place: "Campaign, School"
    },
    // {
    //   text: "Lorem ipsum dolor sit amet",
    //   date: "July 25, 2018",
    //   place: "Party, School"
    // }
  ];
  return (
    <div className="mx-auto w-10/12 grid grid-cols-3 gap-8 py-14">
      {detailedArticles.map((article) => (
        <div
          key={article}
          className="flex flex-col justify-between border-2 rounded-md  h-ft self-center"
        >
          <img src={article} className="h-full object-cover" />
          <div className="mx-auto w-10/12 space-y-6 py-4">
            <h2 className="text-xl xl:text-2xl text-primaryHeader font-bold">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p className="font-petrona text-secText xl:text-lg">
              Authoritatively administrate long- term high-impact e-business via
              parallel web services. Synergistically…
            </p>
            <a
              href=""
              className="uppercase block text-xs font-semibold text-[#999999]"
            >
              Continue Reading
            </a>
          </div>
        </div>
      ))}
      <div className="border-2 text-primaryHeader flex flex-col justify-center gap-5 rounded-lg h-ft">
        {others.map((event, index) => (
          <div
            className="flex flex-col border-b py-5 space-y-3 px-5"
            key={index}
          >
            <h3 className="text-xl xl:text-2xl font-bold">{event.text}</h3>
            <span className="uppercase text-xs text-[#B1B1B1]">
              {event.place}
            </span>
            <p className="text-sm">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
