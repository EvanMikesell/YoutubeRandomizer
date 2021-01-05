import React, { Component } from "react";
import "./embeddedVideo.css";
class EmbeddedVideo extends Component {
  render() {
    return (
      <div class="videoWrapperWrapper">
        <div class="videoWrapper">
          <iframe
            title="Random Video"
            frameborder="0"
            height="500"
            width="850"
            src={this.props.url}
          />
        </div>
      </div>
    );
  }
}
export default EmbeddedVideo;