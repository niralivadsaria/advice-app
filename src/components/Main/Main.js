import React from "react";
import "./Main.scss";
import axios from "axios";

class Main extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 classname="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span> GIVE ME ADVICE! </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Main;
