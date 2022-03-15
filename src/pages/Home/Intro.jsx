import { Suspense, useEffect, useState, useRef } from "react";
import { Transition, TransitionGroup } from "react-transition-group";
import classNames from "classnames";
import { useTheme, useInterval, useWindowSize } from "../../hooks";
import prerender from "../../utils/prerender";
import { reflow } from "../../utils/transiton";
import { medias } from "../../utils/style";
import { styles } from "../../components/ThemeProvider/theme";
import Section from "../../components/Section";
import DecoderText from "../../components/DecoderText";
import Heading from "../../components/Heading";
import VisuallyHidden from "../../components/VisuallyHidden";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import "./Intro.css";

const Intro = ({
  id,
  sectionRef,
  habilities,
  scrollIndicatorHidden,
  ...rest
}) => {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const [habilityIndex, setHabilityIndex] = useState(0);

  const introLabel = [
    habilities.slice(0, -1).join(", "),
    habilities.slice(-1)[0],
  ].join(" e ");

  const currentHability = habilities.filter(
    (_, index) => index === habilityIndex
  );

  useInterval(
    () => {
      const index = (habilityIndex + 1) % habilities.length;
      setHabilityIndex(index);
    },
    5000,
    theme.themeType
  );

  useEffect(() => {
    setHabilityIndex(0);
  }, [theme.themeType]);

  const titleId = `${id}-title`;

  return (
    <Section
      className="intro"
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition
        key={theme.themeType}
        appear={!prerender}
        in={!prerender}
        timeout={3000}
        onEnter={reflow}
      >
        {(status) => (
          <>
            {!prerender && (
              <Suspense fallback={null}>
                {/* Futuramente será adicionado o componente Three.js */}
              </Suspense>
            )}
            <header className="intro__text">
              <h1
                className={classNames("intro__name", `intro__name--${status}`)}
                id={titleId}
              >
                <DecoderText
                  text="Kevin Ramos"
                  start={!prerender}
                  delay={300}
                />
              </h1>
              <Heading level={0} as="h2" className="intro__title">
                <VisuallyHidden className="intro__title-label">{`Programador + ${introLabel}`}</VisuallyHidden>
                <span
                  aria-hidden
                  className={classNames("intro__title-row", {
                    "intro__title-row--hidden": prerender,
                  })}
                >
                  <span
                    className={classNames(
                      "intro__title-word",
                      `intro__title-word--${status}`
                    )}
                    style={{ "--delay": styles.base.durationXS }}
                  >
                    Programador
                  </span>
                  <span
                    className={classNames(
                      "intro__title-line",
                      `intro__title-line--${status}`
                    )}
                  ></span>
                </span>
                <TransitionGroup
                  className={classNames("intro__title-row", {
                    "intro__title-row--hidden": prerender,
                  })}
                  component="span"
                >
                  {currentHability.map((hability) => (
                    <Transition
                      appear
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={hability}
                      onEnter={reflow}
                    >
                      {(wordStatus) => (
                        <span
                          aria-hidden
                          className={classNames(
                            "intro__title-word",
                            "intro__title-word--plus",
                            `intro__title-word--${wordStatus}`
                          )}
                          style={{ "--delay": styles.base.durationL }}
                        >
                          {hability}
                        </span>
                      )}
                    </Transition>
                  ))}
                </TransitionGroup>
              </Heading>
            </header>
            {windowSize.width > medias.tablet && (
              <div
                className={classNames(
                  "intro__scroll-indicator",
                  `intro__scroll-indicator--${status}`,
                  { "intro__scroll-indicator--hidden": scrollIndicatorHidden }
                )}
              ></div>
            )}
            {windowSize.width <= medias.tablet && (
              <div
                className={classNames(
                  "intro__mobile-scroll-indicator",
                  `intro__mobile-scroll-indicator--${status}`,
                  {
                    "intro__mobile-scroll-indicator--hidden":
                      scrollIndicatorHidden,
                  }
                )}
              >
                <ArrowDown aria-hidden />
              </div>
            )}
          </>
        )}
      </Transition>
    </Section>
  );
};

export default Intro;
