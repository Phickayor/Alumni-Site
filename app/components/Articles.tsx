import React from "react";

function Articles() {
  const articles = [
    { name: "Alumni News", image: "/images/alumni.png" },
    { name: "University News", image: "/images/university.png" },
    { name: "Scholarship News", image: "/images/scholarship.png" },
    { name: "Recent News", image: "/images/recent.png" }
  ];
  return (
    <div className="mx-auto w-10/12 py-14">
      <div className="grid grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="self-center text-center shadow-2xl">
            <img src={article.image} className=" w-full object-cover" />
            <div className="flex flex-col justify-around gap-5 py-2">
              <h2 className="text-secHeader text-xl xl:text-2xl font-bold">
                {article.name}
              </h2>
              <p className="text-primaryText font-petrona xl:text-lg px-2 xl:px-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <a
                href=""
                className="uppercase block text-xs font-semibold text-[#999999]"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
