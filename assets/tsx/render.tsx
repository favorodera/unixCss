import ReactDOM from "react-dom/client";
import Index from ".";
import "../scss/index.scss";

const app = ReactDOM.createRoot(document.querySelector(".root-container")!);
app.render(<Index />);
