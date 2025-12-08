import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Développeuse Web Junior, motivée et sérieuse. J'ai un bon niveau en développement web et je continue à apprendre chaque jour. Je travaille sur des projets pour renforcer mes compétences et améliorer mon niveau technique. Je suis passionnée par la création d'applications web simples, fonctionnelles et bien structurées.
        <br /><br />
        Titulaire d'une Licence Professionnelle en Ingénierie de Développement d'Applications (FST Settat) et d'un diplôme de Technicien Spécialisé en Développement Informatique (ISTA NTIC 2 Settat). J'ai participé à plusieurs bootcamps en développement web et à 2 hackathons organisés par Geeks Institute Formation.
        <br /><br />
        Spécialisée dans le stack MERN (MongoDB, Express, React, Node.js), je maîtrise JavaScript, HTML5 et CSS3. Mes compétences incluent le responsive design, la création d'interfaces claires, et le développement d'API. J'utilise Git, GitHub et VS Code au quotidien.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
