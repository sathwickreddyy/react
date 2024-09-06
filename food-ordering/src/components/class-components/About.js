import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor Called");
    }

    // Component Did Mount is used to make an API call post the react component is rendered.
    // This is equivalend to useEffect() in Functional Component
    componentDidMount() {
        // this will be called when this component is rendered and mounted on the actual DOM element.
        console.log("Parent Component Did Mount Called");
    }

    render() {
        console.log("Parent Render Called");
        return (
            <div>
                <h1>About Page</h1>
                <UserClass name={"Sathwick Reddy, Y"} location={"Jagtial Bidda"} />
            </div>
        );
    }
}

export default About;
