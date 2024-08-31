import React from "react";
import ReactDOM from "react-dom/client";

// Jsx is a React Element
// const jsxHeading = <h1 className='heading'>Hello World From React!</h1>;

/**
 * React Component
 * In react everything is a component.
 *
 * Two types of components.
 *
 * 1. Class Based Component - Old style - uses js classes.
 * 2. Functional Component - New style - uses js functions.
 */

// React Functional Component is a just a js function.
// Note: Name all the compnents with capital letter
const Title = () => <h1 className='title'>Hello Dude from React using JSX 🚀</h1>;

const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h1>This is a H1 React Functional Component 🚀</h1>
        </div>
    );
};
//

const root = ReactDOM.createRoot(document.getElementById("root"));

// jsxHeading is transpiled into js (Ecma Script ES6) by parcel before it reaches the JS Engine.
// Parcel deletes the responsibility of transpiling to **Babel**
// root.render(jsxHeading);

// Note: We cannot render the component using root.render(HeadingComponent)
// We should be using angular braces around it.
root.render(<HeadingComponent />);
