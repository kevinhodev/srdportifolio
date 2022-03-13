/**
 * Desfoca o elemento clicável ao mouse sair para ocultar
 * os estados de foco dos usuários com dispositivos de ponteiro
 */
export const blurOnMouseUp = (event) => {
  event.currentTarget.blur();
};
