import React from "react";
// import { Carousel } from "3d-react-carousal";
import "../styles/team.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    img: "team1.jpg",
    name: "Aslam Chemma",
    description:
      "We have been working with Xgrid on different projects and the team is very strong in delivering and understanding our requirements. Their thought process has always aligned with our requirements and they do take utmost care in making sure it’s documented and delivered in good shape.",
    designation: "CEO",
  },
  {
    img: "team2.jpg",
    name: "Amjad Farooqi",
    description:
      "We have been working with Xgrid on different projects and the team is very strong in delivering and understanding our requirements. Their thought process has always aligned with our requirements and they do take utmost care in making sure it’s documented and delivered in good shape.",
    designation: "CFO",
  },
  {
    img: "team3.jpg",
    name: "Tanveer Badami",
    description:
      "We have been working with Xgrid on different projects and the team is very strong in delivering and understanding our requirements.",
    designation: "HR HEAD",
  },
];

const slides = data.map((obj) => (
  <article className="team-card-article">
    <img className="team-member-img" src={obj.img} alt="" />
    <figcaption className="team-figcaption">
      <h4 className="team-member-name">{obj.name}</h4>
      <p className="team-member-description">{obj.description}</p>
    </figcaption>
    <div className="team-member-designation">
      <b>{obj.designation}</b>
    </div>
  </article>
));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Team = () => {
  return (
    <div className="Team-Container">
      {/* <Carousel slides={slides} autoplay={true} interval={3000} /> */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        containerClass="team-carousel-container"
        itemClass="teamcarousel-item"
        pauseOnHover={true}
        arrows={false}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default Team;
