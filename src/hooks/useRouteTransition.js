import { useContext } from "react";
import { TransitionContext } from "../app";

const useRouteTransition = () => {
  return useContext(TransitionContext);
};

export default useRouteTransition;
