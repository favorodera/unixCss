import ReactDOM from "react-dom/client";
import Index from "../tsx";
import "../scss/index.scss";

const rootContainer = document.querySelector(".root-container");

if (rootContainer != null) {
  const app = ReactDOM.createRoot(rootContainer);
  app.render(Index());
}
