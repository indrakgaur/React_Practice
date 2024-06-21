import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor");

    super(props);

    this.state = {
      userInfo: {
        name: "John Doe",
        location: "N/A",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    console.log("Child component mount");
    let data = await fetch("https://api.github.com/users/indrakgaur");
    let json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(avatar_url);
    console.log("Child render");

    return (
      <div className='userCard'>
        <ul>
          <img src={avatar_url}></img>
          <li>Name : {name} (class) </li>
          <li>Contact : 993426239</li>
          <li>Email : johndoe@gmail.com</li>
          <li>Location : {location}</li>
        </ul>
      </div>
    );
  }
}

export default UserClass;
