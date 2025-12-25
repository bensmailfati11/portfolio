import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const renderTechnologies = () => {
  return technologies.map(({ name, icon }) => (
    <div className="w-28 h-28 flex flex-col items-center justify-center" key={name}>
      <img src={icon} alt={name} className="w-20 h-20 object-contain" />
      <p className="text-white text-sm mt-2">{name}</p>
    </div>
  ));
};

const Tech = () => (
  <div className="flex flex-row flex-wrap justify-center gap-10">
    {renderTechnologies()}
  </div>
);

export default SectionWrapper(Tech, "");
