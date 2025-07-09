import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="bg-[#1d1836]/80 rounded-2xl p-8 tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        <p align="left" className="flex flex-wrap gap-4 justify-center">
          <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://pandas.pydata.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg" alt="pandas" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://postman.com" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.python.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://redis.io" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://seaborn.pydata.org/" target="_blank" rel="noreferrer">
            <img src="https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" alt="seaborn" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="80" height="80" className="tech-icon" />
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="80" height="80" className="tech-icon" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
