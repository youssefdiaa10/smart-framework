import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/jquery/dist/jquery.min"
// import "font-awesome";

let root = document.getElementById('root');
let myRoot = ReactDOM.createRoot(root);
myRoot.render(<App/>);
