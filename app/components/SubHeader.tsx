import React from "react";

function SubHeader(props: { headerName: string }) {
  return (
    <div className="bg-offWhite h-24">
      <h2 className="mx-auto w-10/12 font-bold text-2xl py-4">{props.headerName}</h2>;
    </div>
  );
}

export default SubHeader;
