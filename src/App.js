import "./App.css";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Partners from "./components/Partners";
import ServicesCards from "./components/ServicesCards";
import React from "react";
import Team from "./components/Team";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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
        <Team />
      </section>
      <section>
        <Careers />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
