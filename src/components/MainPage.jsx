import React from "react";
import AboutUs from "./AboutUs";
import Home from "./Home";
import NavBar from "./NavBar";
import Partners from "./Partners";
import ServicesCards from "./ServicesCards";
import Contact from "./Contact";
import Footer from "./Footer";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const MainPage = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        {/* <Animator animation={FadeIn()}> */}
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
        {/* </Animator> */}
      </ScrollPage>
    </ScrollContainer>
  );
};

export default MainPage;
