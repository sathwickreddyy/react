import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading", xyz:"abc"}, "Hello World From React! ");

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

const h1 = React.createElement("h1", {}, "This is react")
const h2 = React.createElement("h2", {}, "I'm H2 Tag1165132154984")
const child = React.createElement("div", {id:"child"}, [h1, h2]);
const parent = React.createElement("div", {id:"parent"}, child);


root.render([heading, parent])

// root.render(parent)

// parent.render();
// JSX.