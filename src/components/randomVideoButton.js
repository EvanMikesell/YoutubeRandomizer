import React, { Component} from "react";
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
