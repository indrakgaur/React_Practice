import UserClass from "./userClass";
import UserFunction from "./userFunction";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  async componentDidMount() {
    console.log("Parent did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <UserClass />
        <h1>You are in about page</h1>
      </div>
    );
  }
}

export default About;
