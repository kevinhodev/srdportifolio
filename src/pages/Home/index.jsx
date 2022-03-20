import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Intro from "./Intro";
import ProjectSummary from "./ProjectSummary";
import Profile from "./Profile";
import "./index.css";

const habilities = ["Front-end", "Back-end", "Designer", "Modelador"];

const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectTree = useRef();
  const details = useRef();

  useEffect(() => {
    const revealSections = [
      intro,
      projectOne,
      projectTwo,
      projectTree,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      {
        rootMargin: "-100% 0px 0px 0px",
      }
    );

    revealSections.map((section) => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      indicatorObserver.disconnect();
      sectionObserver.disconnect();
    };
  });

  return (
    <div className="home">
      <Helmet>
        <title>Kevin Ramos | Desenvolvedor Fullstack</title>
        <meta
          name="description"
          content="Portifólio de Kevin Ramos - um desenvolvedor fullstack"
        ></meta>
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        habilities={habilities}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Desenhando o futuro da educação"
        description="Uma plataforma para ajudar os educadores a criar um melhor material didático on-line"
        buttonText="Ver Projeto"
        buttonLink="/projetos/edmais"
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Acompanhamento do progresso do videogame"
        description="Design e desenvolvimento de um aplicativo de rastreamento de videogame construído em React Native"
        buttonText="Ver Projeto"
        buttonLink="https://gamestackapp.com"
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectTree}
        visible={visibleSections.includes(projectTree.current)}
        index={3}
        title="Colaboração de imagens biomédicas"
        description="Aumentando a quantidade de colaboração no Slice, um aplicativo para imagens biomédicas"
        buttonText="Ver Projeto"
        buttonLink="/projetos/biomagem"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
    </div>
  );
};

export default Home;
