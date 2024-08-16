import React from "react";
import Links from "./Links";
import user from "../data/user"

const About = ({ bio }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src='https://picsum.photos/536/354' alt="I made this"/>
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
};

export default About;

