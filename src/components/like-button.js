import React, { Component } from "react";
import "./like-button.css";

export class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Likes: this.props.initialLikes
    };
  }

  handleIncrease = () => {
    //console.log("[LIKE] I receive a click");
    const Likes = this.state.Likes;

    this.setState({ Likes: Likes + 1 });
  };
  render() {
    console.log(this.state.Likes);
    return (
      <div>
        <button className="likebutt" onClick={this.handleIncrease}>
          LIKE
        </button>
        <span className="count-display">{this.state.Likes}</span>
      </div>
    );
  }
}
