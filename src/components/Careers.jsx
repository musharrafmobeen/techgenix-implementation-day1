import React from "react";
import Media from "react-media";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/careers.css";

const jobDescriptionLink = "Job Description --->";

const data = [
  {
    icon: "ailogo2.png",
    title: "AI and ML Expert",
    text: "Artificial Intelligence Machine learning; Artificial intelligence is a technology which enables a machine to simulate human behavior.",
  },
  {
    icon: "weblogo4.png",
    title: "Web Developer",
    text: "Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).",
  },
  {
    icon: "phonelogo2.png",
    title: "Mobile App Developer",
    text: "Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS.",
  },
  {
    icon: "uiuxlogo2.jpg",
    title: "UI/ UX Designer",
    text: "User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style.",
  },
  {
    icon: "devops4.png",
    title: "DevOps",
    text: "DevOps is the combination of cultural practices, and tools that increases an organization's ability to deliver applications and services at high velocity",
  },
  {
    icon: "embededsvg.svg",
    title: "Embeded Softwares Dev",
    text: "Embedded software is used to control the limited, set functions of hardware devices; it is not typically worked with directly by users.",
  },
];

const responsive = {
  tablet: {
    breakpoint: { max: 1260, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
  smalltablet: {
    breakpoint: { max: 780, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Careers = () => {
  return (
    <div className="careerCardSectionContainer">
      <div className="career-section-title">
        <h1>Careers</h1>
      </div>
      <Media query="(max-width: 1260px)">
        {(matches) =>
          matches ? (
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              containerClass="career-carousel-container"
              itemClass="career-carousel-item"
              pauseOnHover={true}
              arrows={false}
            >
              {data.map((obj) => (
                <a className="career-cardContainer" href="#">
                  <figure className="career-image-figure">
                    <img className="career-cardImg" src={obj.icon} alt="" />
                  </figure>
                  <figcaption className="career-image-figcaption">
                    <h1 className="career-cardTitle">{obj.title}</h1>
                    <p className="career-cardText">{obj.text}</p>
                  </figcaption>
                  <div className="job-description-link-container">
                    <a className="job-description-link" href="#">
                      {jobDescriptionLink}
                    </a>
                  </div>
                </a>
              ))}
            </Carousel>
          ) : (
            <article className="career-cardsContainer">
              {data.map((obj) => (
                <a className="career-cardContainer" href="#">
                  <figure className="career-image-figure">
                    <img className="career-cardImg" src={obj.icon} alt="" />
                  </figure>
                  <figcaption className="career-image-figcaption">
                    <h1 className="career-cardTitle">{obj.title}</h1>
                    <p className="career-cardText">{obj.text}</p>
                  </figcaption>
                  <div className="job-description-link-container">
                    <a className="job-description-link" href="#">
                      {jobDescriptionLink}
                    </a>
                  </div>
                </a>
              ))}
            </article>
          )
        }
      </Media>
    </div>
  );
};

export default Careers;
