//TODO: Create a main wrapper that tracks the state, make the button its own jsx file apart from the embedded video file
import React, { Component, Fragment } from "react";
import "./randomVideoButton.css";
class RandomVideoButton extends Component {
  render() {
    return (
      <div id="startVideoButton">
        <button type="button" onClick={this.props.onClick}>
          Load Random Video
        </button>
      </div>
    );
  }
}
export default RandomVideoButton;
