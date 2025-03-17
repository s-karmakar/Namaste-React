import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // createing state variable in class component
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy User",
        location: "Default Location",
        bio: "dummyMail@gmail.com",
      },
    };
  }

  async componentDidMount() {
    //API Call
    const data = await fetch("https://api.github.com/users/s-karmakar");
    const jsonData = await data.json();
    console.log(jsonData);

    //seting the user info in state variable

    this.setState({
      userInfo: {
        name: jsonData.name,
        location: jsonData.location,
        bio: jsonData.bio,
      },
    });
  }

  render() {
    // const { name, location, bio } = this.props;
    const { name, location, bio } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-class">
        <h1>{count}</h1>

        <h2>Class Component</h2>

        <br />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
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
