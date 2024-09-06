# React

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

[]()

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
