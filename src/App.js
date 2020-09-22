import React, { Component } from "react";
import "./App.css";

const Names = () => {
  const [showNameState, setShowNameState] = React.useState(true);
  const names = ["Konrad", "Basia", "Adam"];
  const namesList = names.map((name) => <li key={name}>{name}</li>);

  const toggleNames = () => {
    setShowNameState(!showNameState);
  };

  return (
    <div>
      {showNameState ? <ul>{namesList}</ul> : "Brak imion"}
      <button onClick={toggleNames}>Toggle names</button>
    </div>
  );
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
