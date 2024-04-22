import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { images } from "../../constants";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const fakeExperiences = [
  {
    year: "2022",
    works: [{ name: "Cloudstation", company: "Softwareship", desc: "Description A" }],
  },
  {
    year: "2021",
    works: [{ name: "Zerofram", company: "Zeroframe", desc: "Easily display your collection, manage multiple displays in a gallery or curate artworks for a remote location" }],
  },
];

const fakeSkills = [
  { name: "Typescript", bgColor: "#FF5733", icon: images.typescript },
  { name: "Python", bgColor: "#3366FF", icon: images.python },
  { name: "React", bgColor: "#3366FF", icon: images.react },
  { name: "Node.js", bgColor: "#3366FF", icon: images.node },
  { name: "Express", bgColor: "#3366FF", icon: images.express },
  { name: "JavaScript", bgColor: "#3366FF", icon: images.javascript },
  { name: "GraphQL", bgColor: "#3366FF", icon: images.graphql },
  { name: "Redux", bgColor: "#3366FF", icon: images.redux },
  // { name: "Next.js", bgColor: "#3366FF", icon: images.redux },
  { name: "PostgresQL", bgColor: "#3366FF", icon: images.postgresql },
  { name: "MongoDB", bgColor: "#3366FF", icon: images.mongodb },


];

const Skills = () => {
  const [experiences, setExperiences] = useState(fakeExperiences);
  const [skills, setSkills] = useState(fakeSkills);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                // style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
