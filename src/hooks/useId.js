import { useEffect, useState } from "react";

let id = 0;
const generateId = () => ++id;

const useId = () => {
  const [id, setId] = useState(null);
  useEffect(() => setId(generateId()), []);
  return id;
};

export default useId;
