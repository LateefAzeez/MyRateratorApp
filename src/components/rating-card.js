import React, { Component } from "react";
import { Likes } from "./like-button";
import { Stars } from "./stars.js";
import "./rating-card.css";

export class RatingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Likes: this.props.cardData.LikeDetail
    };
  }
  // for future improvement: Allow users to add rating
  NewRating = Value => {
    this.setState({ ratings: Value });
  };

  render() {
    const datas = this.props.Data;
    // console.log(this.state.Likes);

    // map through the data to render each card based on data from the app component
    return datas.map((data, index) => {
      return (
        <div className="card-container" key={index.InstructorSid}>
          <div className="top-div">
            <p className="inst-name">{this.props.cardData.InstructorDetail}</p>
            <p className="college">{this.props.cardData.CollegeName}</p>
            <Stars className="star" ratings={this.props.cardData.Rating} />
          </div>
          <div className="base-div">
            <Likes initialLikes={this.props.cardData.LikeDetail} />

            <span className="rate-review">
              {this.props.cardData.SubmittedOnUtc}
            </span>
          </div>
        </div>
      );
    });
  }
}
