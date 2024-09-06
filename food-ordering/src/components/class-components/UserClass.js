import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 0,
        };
    }

    render() {
        const { name, location } = this.props;

        const { count, count2 } = this.state;

        return (
            <div className='user-card'>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Contact: sathwick@outlook.in</h3>
                <h4>Count : {count}</h4>
                <h4>Count2 : {count2}</h4>
                <button
                    onClick={() => {
                        // We should never update variables directly
                        // To update we need to use as below
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 2,
                        });
                    }}
                >
                    Update Counts
                </button>
            </div>
        );
    }
}

export default UserClass;
