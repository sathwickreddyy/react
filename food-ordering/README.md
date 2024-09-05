
# React
- Does efficient DOM manipulation with Virtual DOM.
- Has Diff algorithm which is very efficient and does the re-render.



### React Hooks

- These are js functions written in React.
- These are most important hooks    
    - useState() 
        - : Used to generate super powerful react variables.
    - useEffect() : **When a component is loaded/ rendered after that it will call the callback function of useEffect internally.**
        - : Usage - useEffect(() => {}, []);
            - 1st argument is call back function
            - 2nd argument is dependency array / array of dependencies.

### How React Works?

- Reacts uses **Reconciliation Algorithm** which uses **ReactFiber**. 
    - In general if you want log <Body /> i mean any react component, it will output as React Object
    - This React Object can be referred as Virtual DOM
        - When something is modified , a new object will be created. React will check diff between modified object and original object and accordingly the HTML is rendered accordingly. React don't touch actual DOM, it will re-render post reconciliations.
