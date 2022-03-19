import { Transition } from "react-transition-group";
import classNames from "classnames";
import Section from "../../components/Section";
import { medias } from "../../utils/style";
import { reflow } from "../../utils/transiton";
import { useWindowSize } from "../../hooks";
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
  ...rest
}) => {
  const titleID = `${id}-title`;
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= medias.tablet;

  return (
    <Section
      className={classNames("project-summary", {
        "project-summary--alternate": alternate,
        "project-summary--first": index === 1,
      })}
      as="section"
      id={titleID}
      ref={sectionRef}
      tabIndex={-1}
      {...rest}
    >
      <div className="project-summary__content">
        <Transition in={visible} timeout={0} onEnter={reflow}>
          {(status) => {
            <>
              {!alternate && !isMobile && <></>}
              {(alternate || isMobile) && <></>}
            </>;
          }}
        </Transition>
      </div>
    </Section>
  );
};

export default ProjectSummary;
