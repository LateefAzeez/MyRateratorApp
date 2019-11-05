import React, { Component } from "react";
import { Likes } from "./like-button";
import { Stars } from "./stars.js";
import "./rating-card.css";

export class RatingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Likes: this.props.data.LikeDetail
    };
  }
  // for future improvement: Allow users to add rating
  NewRating = Value => {
    this.setState({ ratings: Value });
  };

  render() {
    const datas = this.props.data;
    // console.log(this.state.Likes);

    // map through the data to render each card based on data from the app component
    return datas.map((data, index) => {
      return (
        <div className="card-container" key={index.InstructorSid}>
          <div className="top-div">
            <p className="inst-name">{data.InstructorDetail}</p>
            <p className="college">{data.CollegeName}</p>
            <Stars className="star" ratings={data.Rating} />
          </div>
          <div className="base-div">
            <Likes initialLikes={data.LikeDetail} />

            <span className="rate-review">{data.SubmittedOnUtc}</span>
          </div>
        </div>
      );
    });
  }
}
