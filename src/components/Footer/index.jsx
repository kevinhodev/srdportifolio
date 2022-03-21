import Link from "../Link";
import "./index.css";

const Footer = () => (
  <footer className="footer">
    <span className="footer__date">
      {`© ${new Date().getFullYear()} Kevin Ramos.`}
    </span>
    <Link secondary className="footer__link" href="/humans.txt" target="_self">
      Feito por você verdadeiramente
    </Link>
  </footer>
);

export default Footer;
