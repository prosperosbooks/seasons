import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

// determines location + month
class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    console.log("My component was rendered");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          errorMessage: ""
        });
      },
      err => {
        this.setState({ errorMesssage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("My component was updated!");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.long) {
      return <div>Longitude: {this.state.long}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
