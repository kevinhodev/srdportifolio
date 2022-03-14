import { Link as RouterLink } from "react-router-dom";
import { Transition } from "react-transition-group";
import classNames from "classnames";
import { blurOnMouseUp } from "../../utils/focus";
import { msToNum, numToMs } from "../../utils/style";
import { reflow } from "../../utils/transiton";
import { styles } from "../ThemeProvider/theme";
import { useAppContext } from "../../hooks";
import { navLinks } from "./navData";
import NavToggle from "./NavToggle";
import ThemeToggle from "./ThemeToggle";
import NavIcons from "./NavIcons";
import "./MobileNavBar.css";

const MobileNavBar = ({ handleMobileNavClick, hashKey, isMatch, ...rest }) => {
  const { menuOpen, dispatch } = useAppContext();

  return (
    <>
      <NavToggle
        onClick={() => dispatch({ type: "toggleMenu" })}
        menuOpen={menuOpen}
      />
      <Transition
        mountOnEnter
        unmountOnExit
        in={menuOpen}
        timeout={{ enter: 0, exit: msToNum(styles.base.durationL) }}
        onEnter={reflow}
      >
        {(status) => (
          <nav
            className={classNames(
              "navbar__mobile-nav",
              `navbar__mobile-nav--${status}`
            )}
            {...rest}
          >
            {navLinks.map(({ label, pathname, hash }, index) => (
              <RouterLink
                className={classNames(
                  "navbar__mobile-nav-link",
                  `navbar__mobile-nav-link--${status}`
                )}
                aria-current={isMatch(pathname, hash) ? "page" : undefined}
                key={label}
                onClick={handleMobileNavClick}
                to={{ pathname, hash, state: hashKey }}
                onMouseUp={blurOnMouseUp}
                style={{
                  transitionDelay: numToMs(
                    Number(msToNum(styles.base.durationS)) + index * 50
                  ),
                }}
              >
                {label}
              </RouterLink>
            ))}
            <NavIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
    </>
  );
};

export default MobileNavBar;
