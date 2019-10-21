import React, { Component } from "react";
import { Likes } from "./like-button";
import { Stars } from "./stars.js";
import "./rating-card.css";

export class RatingCard extends Component {
  render() {
    const { ratings } = this.props;
    console.log(ratings);

    return (
      <div className="card-container">
        <div className="top-div">
          <p className="inst-name">Instructor Name</p>
          <p className="college">College Name</p>
          {ratings.map(rating => (
            <Stars
              className="star"
              key={rating.InstructorSid}
              ratings={rating.Rating}
            />
          ))}
        </div>
        <div className="base-div">
          <Likes onpress={this.props.onIncrease} />
          <span className="count-display">{this.props.Likes}</span>
          <span className="rate-review">
            Last Reviewed: {this.props.review}
          </span>
        </div>
      </div>
    );
  }
}
