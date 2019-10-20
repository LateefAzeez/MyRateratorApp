import React, { Component } from "react";
import "./like-button.css";

export class Likes extends Component {
  render() {
    return (
      <button className="likebutt" onClick={this.props.onpress}>
        LIKE
      </button>
    );
  }
}
