import { useRef } from "react";
import { Helmet } from "react-helmet";
import Intro from "./Intro";
import "./index.css";

const habilities = ["Front-end", "Back-end", "Designer", "Modelador"];

const Home = () => {
  const intro = useRef();

  return (
    <div className="home">
      <Helmet>
        <title>Kevin Ramos | Desenvolvedor Fullstack</title>
        <meta
          name="description"
          content="Portifólio de Kevin Ramos - um desenvolvedor fullstack"
        ></meta>
      </Helmet>
      <Intro id="intro" sectionRef={intro} habilities={habilities} />
    </div>
  );
};

export default Home;
