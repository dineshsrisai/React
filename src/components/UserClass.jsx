class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + "child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
  }

  render() {
    console.log(this.props.name + "child render");

    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count : {count}</h2>
        <button
          className="user-card-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>contact : @dineshonline__</h4>
      </div>
    );
  }
}

export default UserClass;
