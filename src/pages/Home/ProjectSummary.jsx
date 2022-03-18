import classNames from "classnames";
import Section from "../../components/Section";
import "./ProjectSummary.css";

const ProjectSummary = ({
  id,
  sectionRef,
  visible,
  index,
  title,
  description,
  buttontext,
  buttonLink,
  alternate,
}) => {
  return (
    <Section
      className={classNames("project-summary", {
        "project-summary--alternate": alternate,
        "project-summary--first": index === 1,
      })}
      ref={sectionRef}
    ></Section>
  );
};

export default ProjectSummary;
