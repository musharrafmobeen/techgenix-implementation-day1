import React from "react";
import "../styles/partners.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners = () => {
  const data = [
    {
      img: "microsoftlogo.png",
      partnerName: "Microsoft",
      partnerDescription: `Microsoft Corporation is an American multinational technology
            corporation which produces computer software, consumer electronics,
            personal computers, and related services. Its best known software
            products are the Microsoft Windows line of operating systems, the
            Microsoft Office suite, and the Internet Explorer and Edge web
            browsers.`,
    },
    {
      img: "microsoftlogo.png",
      partnerName: "Microsoft",
      partnerDescription: `Microsoft Corporation is an American multinational technology
            corporation which produces computer software, consumer electronics,
            personal computers, and related services. Its best known software
            products are the Microsoft Windows line of operating systems, the
            Microsoft Office suite, and the Internet Explorer and Edge web
            browsers.`,
    },
    {
      img: "microsoftlogo.png",
      partnerName: "Microsoft",
      partnerDescription: `Microsoft Corporation is an American multinational technology
            corporation which produces computer software, consumer electronics,
            personal computers, and related services. Its best known software
            products are the Microsoft Windows line of operating systems, the
            Microsoft Office suite, and the Internet Explorer and Edge web
            browsers.`,
    },
  ];

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

  return (
    <div className="partners-container">
      <div className="partners-heading">
        <h2>Partners</h2>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        itemClass="carousel-item"
        pauseOnHover={true}
        arrows={false}
      >
        {data.map((obj) => (
          <div className="partner-container">
            <figure>
              <img className="partner-logo" src={obj.img} alt="" />
            </figure>
            <figcaption>
              <h2>{obj.partnerName}</h2>
              <p>{obj.partnerDescription}</p>
            </figcaption>
            <a href="#">Learn More</a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Partners;
