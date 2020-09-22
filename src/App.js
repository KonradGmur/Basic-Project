import React, { Component } from "react";
import "./App.css";

class Headline extends Component {
  render() {
    const title = "ReactJS";
    const names = ["Konrad", "Basia", "Adam"];

    return (
      <div>
        <h1>Hello {title}</h1>
        <ul>
          <li>{names[0]}</li>
        </ul>
      </div>
    );
  }
}

export default Headline;
