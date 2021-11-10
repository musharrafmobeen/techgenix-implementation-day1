import React from "react";
import Team from "./Team";
import NavBar from "./NavBar";

const TeamPage = () => {
  return (
    <div className="main-container">
      <NavBar />
      <section>
        <Team />
      </section>
    </div>
  );
};

export default TeamPage;
