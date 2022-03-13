import { memo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize, useAppContext } from "../../hooks";
import { blurOnMouseUp } from "../../utils/focus";
import { medias } from "../../utils/style";
import Logo from "../Logo";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./NavBar";
import MobileNavbar from "./MobileNavBar";
import "./index.css";

const Header = ({ location }) => {
  const [hashKey, setHashKey] = useState();
  const { menuOpen, dispatch } = useAppContext();
  const headerRef = useRef();
  const windowSize = useWindowSize();
  const isMobile =
    windowSize.width <= medias.mobile || windowSize.height <= medias.mobile;

  const handleNavClick = () => {
    setHashKey(Math.random().toString(32).substr(2, 8));
  };

  const handleMobileNavClick = () => {
    handleNavClick();
    if (menuOpen) dispatch({ type: "toggleMenu" });
  };

  const isMatch = (url = "", hash = "") => {
    if (!url) return false;
    return `${url}${hash}` === `${location.pathname}${location.hash}`;
  };

  return (
    <header className="navbar" ref={headerRef}>
      <Link
        className="navbar__logo"
        to={{ pathname: "/", hash: "#intro", state: hashKey }}
        aria-label="Kevin Ramos, Desenvolvedor Fullstack"
        onClick={handleMobileNavClick}
        onBlur={blurOnMouseUp}
      >
        <Logo highlight></Logo>
      </Link>
      {isMobile ? (
        <MobileNavbar
          handleMobileNavClick={handleMobileNavClick}
          hashKey={hashKey}
          isMatch={isMatch}
        />
      ) : (
        <>
          <Navbar
            handleNavClick={handleNavClick}
            hashKey={hashKey}
            isMatch={isMatch}
          />
          <ThemeToggle />
        </>
      )}
    </header>
  );
};

export default memo(Header);
