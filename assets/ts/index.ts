import ReactDOM from "react-dom/client";
import Index from "../tsx";
import "../scss/index.scss";

const elementAvailabilityCheck = (
  element: Element | null
): element is Element => {
  return element != null;
};

const rootContainer = document.querySelector(".root-container");

if (elementAvailabilityCheck(rootContainer)) {
  const app = ReactDOM.createRoot(rootContainer);
  app.render(Index());
}
