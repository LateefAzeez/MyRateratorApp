import React, { Component } from "react";
import { Likes } from "./like-button";
import { Stars } from "./stars.js";
import "./rating-card.css";

export class RatingCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="top-div">
          <p className="inst-name">Instructor Name</p>
          <p className="college">College Name</p>
          <Stars className="star" rating={this.props.ratings} />
        </div>
        <div className="base-div">
          <Likes onpress={this.props.onIncrease} />
          <span className="count-display">{this.props.counter}</span>
          <span className="rate-review">
            Last Reviewed: {this.props.review}
          </span>
        </div>
      </div>
    );
  }
}
