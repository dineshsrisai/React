import User from "./User";
// import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");

    return (
      <div>
        <h1>About us page</h1>
        {/* <UserClass name={"First "} location={"Bhimavaram"} /> */}
        <User name={"Second "} location={"Bhimavaram"} />
      </div>
    );
  }
}

export default About;
