import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Default",
                location: "Default",
                avatar_url: "Default",
            },
        };
    }

    async componentDidMount() {
        // this will be called when this component is rendered and mounted on the actual DOM element.
        const data = await fetch("https://api.github.com/users/sathwick18");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component is Gone, if we move to other pages or do something else");
    }

    render() {
        const { name, location } = this.props;

        const { userInfo } = this.state;
        return (
            <div className='user-card'>
                <h2>Name: {userInfo.name}</h2>
                <h2>Location: {userInfo.location}</h2>
                <h3>Contact: sathwick@outlook.in</h3>
                <img src={userInfo.avatar_url} alt='Avatar URL' />
            </div>
        );
    }
}

export default UserClass;

/**
 * Understanding React Life cycle
 *
 * Constructor () - Dummy Values
 * Render () - Dummy Values
 *  <HTML Dummy>
 * componentDidMount() {
 *      <API Call>
 *      <this.setState()/>
 * }
 *
 * Phase 2 post the state variable is updated, react will re-render the component
 *
 *  Render() - Values fetched from API
 *          <HTML Values from API>
 * post dom updation it will invoke the
 *  componentDidUpdate() method of the component{
 *  }
 *
 */
