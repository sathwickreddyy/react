import React from "react";
import ReactDOM from "react-dom/client";

// Babel does JSX => React.createElement => ReactElement-JS Object => HtmlElement(render)
const jsxHeading = <h1 className="heading">Hello World From React!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// jsxHeading is transpiled into js (Ecma Script ES6) by parcel before it reaches the JS Engine.
// Parcel deletes the responsibility of transpiling to **Babel**
root.render(jsxHeading);
