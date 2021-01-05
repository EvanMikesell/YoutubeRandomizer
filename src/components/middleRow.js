import React, { Component } from "react";
import RandomVideoButton from "./randomVideoButton.js"
import Filter from "./filter.js";
import "./middleRow.css";
import "./embeddedVideo.css";
class MiddleRow extends Component {
  render() {
    return (
      <div className="middle">
        <RandomVideoButton onClick={this.props.getRandomVideo} />
        <Filter updateFilters={this.props.updateFilters}/>
      </div>
    );
  }
}
export default MiddleRow;
