import { Transition } from "react-transition-group";
import classNames from "classnames";
import Section from "../../components/Section";
import Divider from "../../components/Divider";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
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
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) => {
  const titleID = `${id}-title`;
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= medias.tablet;
  const indexText = index < 10 ? `0${index}` : index;

  const renderDetails = (status) => (
    <div className="project-summary__details">
      <div aria-hidden className="project-summary__index">
        <Divider
          notchWidth="64px"
          notchHeight="8px"
          collapsed={status !== "entered"}
          collapseDelay={1000}
        />
        <span
          className={classNames(
            "project-summary__index-number",
            `project-summary__index-number--${status}`
          )}
        >
          {indexText}
        </span>
      </div>
      <Heading
        level={3}
        as="h2"
        className={classNames(
          "project-summary__title",
          `project-summary__title--${status}`
        )}
        id={titleID}
      >
        {title}
      </Heading>
      <Text
        className={classNames(
          "project-summary__description",
          `project-summary__description--${status}`
        )}
      >
        {description}
      </Text>
      <div
        className={classNames(
          "project-summary__button",
          `project-summary__button--${status}`
        )}
      >
        <Button iconHoverShift href={buttonLink} iconEnd="arrowRight">
          {buttonText}
        </Button>
      </div>
    </div>
  );

  return (
    <Section
      className={classNames("project-summary", {
        "project-summary--alternate": alternate,
        "project-summary--first": index === "01",
      })}
      as="section"
      aria-labelledby={titleID}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className="project-summary__content">
        <Transition in={visible} timeout={0} onEnter={reflow}>
          {(status) => (
            <>
              {!alternate && !isMobile && <>{renderDetails(status)}</>}
              {(alternate || isMobile) && <>{renderDetails(status)}</>}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
};

export default ProjectSummary;
