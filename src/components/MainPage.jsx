import React from "react";
import AboutUs from "./AboutUs";
import Home from "./Home";
import NavBar from "./NavBar";
import Partners from "./Partners";
import ServicesCards from "./ServicesCards";
import Contact from "./Contact";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div className="main-container">
      <NavBar />
      <section>
        <Home />
      </section>
      <section>
        <ServicesCards />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default MainPage;
