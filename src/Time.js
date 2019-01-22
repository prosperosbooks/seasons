import React from "react";

class Clock extends React.Component {
  state = {
    time: null
  };

  componentDidMount() {
    console.log("mounted");
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p style={{ margin: "20px" }}>{this.state.time}</p>
      </div>
    );
  }
}

export default Clock;
