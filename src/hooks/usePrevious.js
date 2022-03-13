import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const savedValue = useRef();

  useEffect(() => {
    savedValue.current = value;
  }, [value]);

  return savedValue.current;
};

export default usePrevious;
