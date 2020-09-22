import React, { Component } from "react";
import "./App.css";

const Names = (props) => {
  const names = ["Konrad", "Basia", "Adam"];
  const namesList = names.map((name) => <li key={name}>{name}</li>);

  return <div>{props.test ? <ul>{namesList}</ul> : "Brak imion"}</div>;
};

class Headline extends Component {
  state = {
    title: "ReactJS",
    showNames: true,
  };

  toggleNames = () => {
    this.setState({
      showNames: !this.state.showNames,
    });
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
        <Names test={this.state.showNames} />
        <button onClick={changeTitle}>Change title</button>
        <button onClick={this.toggleNames}>Toggle names</button>
      </div>
    );
  }
}

export default Headline;
