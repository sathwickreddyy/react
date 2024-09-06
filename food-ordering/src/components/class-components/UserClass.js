import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, location } = this.props;

        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Contact: sathwick@outlook.in</h3>
            </div>
        );
    }
}

export default UserClass;
