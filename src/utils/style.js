/**
 * Pontos de interrupção de consulta de mídia
 */
export const medias = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1024,
  mobile: 696,
  mobileS: 400
};

/**
 * Converte um número para uma string de pixel
 */
export const numToPx = (num) => `${num}px`;

/**
 * Converte valores de pixel em rems
 */
export const pxToRem = (px) => `${px / 16}rem`;

/**
 * Converta valores em ms em números brutos para a propriedade
 * Transition Delay de ReactTransitionGroup
 */
export const msToNum = (msString) => Number(msString.replace("ms", ""));

/**
 * Converte um número em um string com milisegundos
 */
export const numToMs = (num) => `${num}ms`;
