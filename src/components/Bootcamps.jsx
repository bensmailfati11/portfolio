import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { bootcamps } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const BootcampCard = ({ bootcamp }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={bootcamp.date}
    iconStyle={{ background: bootcamp.iconBg }}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{bootcamp.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {bootcamp.organization}
      </p>
      <p className="text-white-100 text-[14px] mt-3">
        {bootcamp.description}
      </p>
    </div>

    <div className="mt-5 flex flex-wrap gap-2">
      {bootcamp.skills.map((skill, index) => (
        <span
          key={`skill-${index}`}
          className="text-[12px] bg-tertiary text-secondary px-3 py-1 rounded-full"
        >
          {skill}
        </span>
      ))}
    </div>
  </VerticalTimelineElement>
);

const Bootcamps = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Ma formation continue
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Bootcamps & Hackathons</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {bootcamps.map((bootcamp, index) => (
          <BootcampCard key={`bootcamp-${index}`} bootcamp={bootcamp} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Bootcamps, "bootcamps");
