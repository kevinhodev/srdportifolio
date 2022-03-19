import { pxToRem } from "../../utils/style";

const defaultFontStack =
  "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif";

// Todos os estilos base
const baseStyles = {
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  fontStack: `Montserrat, ${defaultFontStack}`,
  japaneseFontStack:
    "ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  lineHeightTitle: "1.1",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeBodyS: pxToRem(16),
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  maxWidthL: "1096px",
  spaceOuter: "64px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
};

// -- Estilos base que mudam baseado no tema da aplicação --
const dark = {
  themeType: "dark",
  rgbBackground: "17 17 17",
  rgbPrimary: "0 229 255",
  rgbAccent: "0 229 255",
  rgbText: "255 255 255",
  colorTextTitle: "rgb(var(--rgbText) / 1)",
  colorTextBody: "rgb(var(--rgbText) / 0.8)",
  colorTextLight: "rgb(var(--rgbText) / 0.6)",
};

const light = {
  themeType: "light",
  rgbBackground: "242 242 242",
  rgbPrimary: "0 0 0",
  rgbAccent: "0 229 255",
  rgbText: "0 0 0",
  colorTextTitle: "rgb(var(--rgbText) / 1)",
  colorTextBody: "rgb(var(--rgbText) / 0.7)",
  colorTextLight: "rgb(var(--rgbText) / 0.6)",
};
// ---------------------------------------------------------

// -- Estilos base que mudam baseado no tamanho da tela --
const desktopStyles = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80),
};

const laptopStyles = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(52),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
};

const tabletStyles = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
};

const mobileStyles = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeBodyL: pxToRem(18),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14),
};

const mobileSmallStyles = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20),
};
// -------------------------------------------------------

export const styles = {
  base: baseStyles,
  desktop: desktopStyles,
  laptop: laptopStyles,
  tablet: tabletStyles,
  mobile: mobileStyles,
  mobileS: mobileSmallStyles,
};

export const themes = { dark, light };
