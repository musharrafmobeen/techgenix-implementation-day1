import React from "react";
import NavBar from "./NavBar";
import Careers from "./Careers";

const CareerPage = () => {
  return (
    <div className="main-container">
      <NavBar />
      <section>
        <Careers />
      </section>
    </div>
  );
};

export default CareerPage;
