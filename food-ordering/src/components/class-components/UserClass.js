import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    render() {
        const { name, location } = this.props;

        const { count } = this.state;

        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Contact: sathwick@outlook.in</h3>
                <h4>Count : {count}</h4>
            </div>
        );
    }
}

export default UserClass;
