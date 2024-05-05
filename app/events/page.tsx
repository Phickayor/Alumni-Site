import React from "react";
import Events from "../components/Events/Events";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pb-5">
        <Events />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
