import React, { Component } from "react";
import "./App.css";

class Names extends Component {
  render() {
    const names = ["Konrad", "Basia", "Adam"];
    const namesList = names.map((name) => <li>{name}</li>);
    const showNames = true;
    return <div>{showNames ? <ul>{namesList}</ul> : "Brak imion"}</div>;
  }
}

class Headline extends Component {
  render() {
    const title = "ReactJS";

    return (
      <div>
        <h1>Hello {title}</h1>
        <Names />
      </div>
    );
  }
}

export default Headline;
