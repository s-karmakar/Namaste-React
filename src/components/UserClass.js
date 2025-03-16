import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // createing state variable in class component
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-class">
        <h1>{count}</h1>

        <h2>Class Component</h2>

        <br />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        <button
          onClick={() => {
            // updating state variable in class component
            this.setState({ count: count + 1 });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
