import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768;
    }
    return false;
  });

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <div className="w-28 h-28 flex items-center justify-center" key={name}>
          {isMobile ? (
            <img src={icon} alt={name} className="w-20 h-20 object-contain" />
          ) : (
            <BallCanvas icon={icon} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
