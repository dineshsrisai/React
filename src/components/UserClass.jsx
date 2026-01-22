import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "India",
      },
    };
  }

  componentDidMount() {
    // const data = await fetch("https://api.github.com/users/dineshsrisai");
    // const json = await data.json();
    // this.setState({
    //   userInfo: json,
    // });
    // console.log(json);
    this.timer = setInterval(() => {
      console.log("Dinesh's class based component");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { login, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {login}</h2>
        <h3>Location : {location}</h3>
        <h4>contact : @dineshonline__</h4>
      </div>
    );
  }
}

export default UserClass;
