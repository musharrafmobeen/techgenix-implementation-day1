import React from "react";
import { Carousel } from "3d-react-carousal";
import "../styles/team.css";

const data = [
  {
    img: "devops4.png",
    name: "sammad",
    description: "khalli walli",
    designation: "janitor",
  },
  {
    img: "embededscg.svg",
    name: "sammad",
    description: "khalli walli",
    designation: "janitor",
  },
  {
    img: "embededscg.svg",
    name: "sammad",
    description: "khalli walli",
    designation: "janitor",
  },
];

const slides = data.map((obj) => (
  <article className="team-card-article">
    <figure className="team-figure">
      <img className="team-member-img" src={obj.img} alt="" />
    </figure>
    <figcaption className="team-figcaption">
      <h4 className="team-member-name">{obj.name}</h4>
      <p className="team-member-description">{obj.description}</p>
    </figcaption>
    <p className="team-member-designation">
      <b>{obj.designation}</b>
    </p>
  </article>
));

const Team = () => {
  return (
    <div className="Team-Container">
      <Carousel slides={slides} autoplay={true} interval={3000} />
    </div>
  );
};

export default Team;
