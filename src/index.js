import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Header from "./components/Header/Header";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <div className="main">
      <Header /> 
      <App />
    </div>
  </div>
);
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
