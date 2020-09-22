import React, { Component } from "react";
import "./App.css";

class Headline extends Component {
  render() {
    const title = "ReactJS";
    const names = ["Konrad", "Basia", "Adam"];
    const namesList = names.map((name) => <li>{name}</li>);
    const showNames = true;
    return (
      <div>
        <h1>Hello {title}</h1>
        {showNames ? <ul>namesList</ul> : null}
      </div>
    );
  }
}

export default Headline;
