import classNames from "classnames";
import { createContext, useEffect } from "react";
import { Helmet } from "react-helmet";

import { useTheme } from "../../hooks";
import { themes, styles } from "./theme";
import { medias } from "../../utils/style";

const ThemeContext = createContext({});

/**
 * -- Funções deste componente --
 * 1. Receber o tipo de tema do estado global da aplicação, sendo o estado inicial = "dark"
 */
const ThemeProvider = ({
  themeType,
  children,
  className,
  as: Component = "div"
}) => {
  const currentTheme = { ...themes[themeType] };
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.themeType;

  // Salva o tipo do tema no cache e aplica a classe ao corpo
  useEffect(() => {
    if (isRootProvider) {
      window.localStorage.setItem("theme", JSON.stringify(themeType));
      document.body.classList.remove("light", "dark");
      document.body.classList.add(themeType);
    }
  }, [themeType, isRootProvider]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      {isRootProvider ? (
        <>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
              rel="stylesheet"
            />
            <style>{allStyles}</style>
          </Helmet>
          {children}
        </>
      ) : (
        <Component
          className={classNames("theme-provider", className)}
          style={generateReactCSSPropertiesObject(currentTheme)}
        >
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Transforma objetos de estilos de tema em strings de propriedades personalizadas CSS
 * Ex: Transforma { fontSize: 4rem } em --fontSize: 4rem
 */
const generateCustomCSSProperties = (theme) => {
  return Object.keys(theme)
    .filter((key) => key !== "themeType")
    .map((key) => `--${key}: ${theme[key]};`)
    .join("\n");
};

/**
 * Transforma objetos de estilos de tema em um objeto CSSProperties React
 */
const generateReactCSSPropertiesObject = (theme) => {
  const style = {};

  Object.keys(theme)
    .filter((key) => key !== "themeType")
    .map((key) => (style[`--${key}`] = theme[key]));

  return style;
};

/**
 * Gera consultas de mídia para os estilos de tema
 */
const generateMediaQueries = () => {
  return Object.keys(medias)
    .map((key) => {
      return `
          @media (max-width: ${medias[key]}px) {
            :root {
              ${generateCustomCSSProperties(styles[key])}
            }
          }
        `;
    })
    .join("\n");
};

const allStyles = `
  :root {
    ${generateCustomCSSProperties(styles.base)}
  }

  ${generateMediaQueries()}

  .dark {
    ${generateCustomCSSProperties(themes.dark)}
  }

  .light {
    ${generateCustomCSSProperties(themes.light)}
  }
`;

export { ThemeContext };

export default ThemeProvider;
