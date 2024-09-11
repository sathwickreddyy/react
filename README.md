# React

-   [Overview](https://github.com/sathwick18/react/tree/main?tab=readme-ov-file#overview)
-   [React Hooks](https://github.com/sathwick18/react/tree/main?tab=readme-ov-file#react-hooks)
-   [How React Works](https://github.com/sathwick18/react/tree/main?tab=readme-ov-file#how-react-works)
-   [Understanding React Class Component Life Cycle](https://github.com/sathwick18/react/tree/main?tab=readme-ov-file#understanding-react-lifecycle)
-   [Understanding Redux](https://github.com/sathwick18/react/tree/main?tab=readme-ov-file#understanding-redux-toolkit)

## Overview

-   Does efficient DOM manipulation with Virtual DOM.
-   Has Diff algorithm which is very efficient and does the re-render.

## React Hooks

-   These are js functions written in React.
-   These are most important hooks
    -   useState()
        -   Used to generate super powerful react variables.
        -   Never create useState outside react components.
        -   Never useStates inside a conditions / loops / functions.
    -   useEffect() : **When a component is loaded/ rendered after that it will call the callback function of useEffect internally.**
        -   : Usage - useEffect(() => {}, []);
            -   1st argument is call back function
                -   Called post the component rendered.
            -   2nd argument is dependency array / array of dependencies.
                -   If not present, the useEffect function will be called for every rendering.
                -   if [] is provided, the useEffect function will be called only once, even if the component re-renders multiple times the useEffect function will not be called.
                -   if dependency array holds any state variables, the useEffect function will be called only when state variables are changed.

## How React Works?

-   Reacts uses **Reconciliation Algorithm** which uses **ReactFiber**.
    -   In general if you want log <Body /> i mean any react component, it will output as React Object
    -   This React Object can be referred as Virtual DOM
        -   When something is modified , a new object will be created. React will check diff between modified object and original object and accordingly the HTML is rendered accordingly. React don't touch actual DOM, it will re-render post reconciliations.

## Understanding React Lifecycle

React components go through several lifecycle phases, each with specific methods that can be overridden to run code at particular times in the process. Here's a breakdown of the main lifecycle methods:

![Class Component Life Cycle](https://github.com/sathwick18/react/blob/main/food-ordering/public/react-class-component-life-Cycle.jpeg)

### **1. Constructor**

-   **Purpose:** Initialize state and bind event handlers.
-   **Usage:** Often used to set up initial state with dummy values or bind methods to the component instance.

### **2. Render**

-   **Purpose:** Describe what the UI should look like.
-   **Usage:** Initially renders the component with dummy values. This method should be pure, meaning it does not modify component state or interact with the DOM directly.

### **3. componentDidMount**

-   **Purpose:** Invoked immediately after a component is mounted (inserted into the tree).
-   **Usage:** Ideal for making API calls. After fetching data, `setState` is used to update the component's state with the new data.

### **Phase 2: Component Re-rendering**

Once the state is updated (for example, after an API call), the component will re-render:

-   **Render:** The component re-renders with the values fetched from the API. The UI is updated to reflect these new values.

### **4. componentDidUpdate**

-   **Purpose:** Invoked immediately after updating occurs. This method is not called for the initial render.
-   **Usage:** Can be used to perform operations on the DOM when the component has been updated. It's also used to make network requests as long as you compare the current props to previous props (e.g., a network request may not be necessary if the props have not changed).

### Additional Information

-   **Lifecycle Phases:** React lifecycle methods are categorized into three main phases: **Mounting**, **Updating**, and **Unmounting**.
-   **Best Practices:** Avoid side effects in the `render` method. Use lifecycle methods like `componentDidMount` and `componentDidUpdate` for side effects such as data fetching and DOM manipulation.
-   **React Hooks:** In functional components, similar effects are achieved using hooks like `useEffect`, which can mimic the behavior of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

## Understanding Redux Toolkit

-   We have few jargon likes, Reducer, Selector, Action Dispatcher, Redux Store, Slices to understand Redux Toolkit.

### Installation

-   Install @reduxjs/toolkit and react-redux dependencies.

```
    npm i @reduxjs/toolkit react-redux
```

1. Build our store
2. Connect our store to our app.
3. Slick (Cart Slice)
4. Dispatch (action) - Reducer.
5. Selector

![Redux Notes 1](https://github.com/sathwick18/react/blob/main/food-ordering/public/Redux.jpeg)

-   In the above picture,
    Upon Clicking -> Dispatches Action -> Triggers Reducer Function -> Updates Slice in Redux Store -> Publishes the changes to all the components which were **Subsribed** to the Selectors of Slice -> React Component i.e., Cart get's Updated.

## Testing

-   Unit testing.
-   Integration testing.
-   End to End testing - e2e testing.

-   [We need to use react testing library for testing purpose](https://testing-library.com/docs/react-testing-library/intro/)

```
npm i -D @testing-library/react
```

    -   React uses framework called jest.
        -   Install associated [dependencies](https://jestjs.io/docs/tutorial-react) using babel.
        ```
        npm install --save-dev babel-jest @babel/core @babel/preset-env
        ```
        - Configure Babel.

        ```
            babel.config.js
            module.exports = {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
            };
        ```

        - [Configure Parcel Config file to disable default babel traspilation from parceljs](https://parceljs.org/languages/javascript/#usage-with-other-tools)
        ```
            .parcelrc:
            {
            "extends": "@parcel/config-default",
            "transformers": {
                "*.{js,mjs,jsx,cjs,ts,tsx}": [
                "@parcel/transformer-js",
                "@parcel/transformer-react-refresh-wrap"
                ]
            }
            }
        ```
    - Configure package.json scripts section to enable tests with jest.
    - Jest configuration
        ```
            npx jest --init
        ```
        - Use jsdom test enviornment.
        - Add coverage report
        - Provider babel
        - y for mock calls before every test.
    - Install js dom library [why?](https://testing-library.com/docs/react-testing-library/setup#jest-28)
        ```
        npm install --save-dev jest-environment-jsdom
        ```
