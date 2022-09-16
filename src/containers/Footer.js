import React from "react";
import DeveloperCard from "../assets/DeveloperCard";
import { Contribute } from "../components/Contribute";
import devData from "../assets/devData";

/** functionality for loading developer cards components, and the contribute components **/
export const Footer = () => {
  const devCards = [];
  for (const [name, value] of Object.entries(devData)) {
    devCards.push(
      <DeveloperCard>
        <img src={value.img} alt={name} className="dev-pic" />
        <p className="dev-name">{value["dev-name"]}</p>
        <a href={value["github-link"]}>{value["github-handle"]}</a>
      </DeveloperCard>
    );
  }
  return (
    <div className="footer">
      <h3 className="team-heading">Meet the team</h3>
      <div className="devCards">
        {devCards}
      </div>
      <Contribute />
    </div>
  )
};

