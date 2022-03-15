import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Intro from "./Intro";
import "./index.css";

const habilities = ["Front-end", "Back-end", "Designer", "Modelador"];

const Home = () => {
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();

  useEffect(() => {
    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
        console.log(entry);
      },
      {
        rootMargin: "-100% 0px 0px 0px",
      }
    );

    indicatorObserver.observe(intro.current);

    return () => indicatorObserver.disconnect();
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
    </div>
  );
};

export default Home;
