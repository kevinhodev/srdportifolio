/**
 * Retorna true se pré-renderizado por react-snap.
 * Útil para coisas que precisam ser executadas
 * apenas no lado do cliente e não durante a pré-renderização
 */
const prerender = navigator.userAgent === "ReactSnap";
export default prerender;
