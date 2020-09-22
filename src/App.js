import React, { Component } from "react";
import "./App.css";

const Names = () => {
  const names = ["Konrad", "Basia", "Adam"];
  const namesList = names.map((name) => <li>{name}</li>);
  const showNames = true;
  return <div>{showNames ? <ul>{namesList}</ul> : "Brak imion"}</div>;
};

class Headline extends Component {
  state = {
    title: "ReactJS",
  };

  render() {
    const changeTitle = () => {
      this.setState({
        title: "Vue",
      });
    };

    return (
      <div>
        <h1>Hello {this.state.title}</h1>
        <Names />
        <button onClick={changeTitle}>Change title</button>
      </div>
    );
  }
}

export default Headline;
