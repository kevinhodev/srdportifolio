import { useContext } from "react";
import { AppContext } from "../app";

const useAppContext = () => useContext(AppContext);

export default useAppContext;
