import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
  const isClient = typeof window !== "undefined";

  const getWindowSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : null,
      height: isClient ? window.innerHeight : null
    };
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(() => getWindowSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize());

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowSize]);

  return windowSize;
};

export default useWindowSize;
