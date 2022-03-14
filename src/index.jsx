import ReactDOM from "react-dom";

import App from "./app";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}
