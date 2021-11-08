import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeTextContainer">
        <p className="homeText">
          <b>
            Creative
            <br />
            And <br />
            Innovative
          </b>
        </p>
        <p className="homeTextDetail">
          With a wide range of software and hardware expertise, we build cutting
          edge products tailor-made for your business needs.
        </p>
      </div>
    </div>
  );
};

export default Home;
