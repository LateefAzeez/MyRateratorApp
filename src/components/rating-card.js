import React, { Component } from "react";
import { Likes } from "./like-button";
import { Stars } from "./stars.js";
import "./rating-card.css";

export class RatingCard extends Component {
  render() {
    const datas = this.props.cardData;
    // console.log(this.state.Likes);
    console.log(datas);
    // map through the data to render each card based on data from the app component
    return datas.map((data, index) => {
      return (
        <div className="card-container" key={data.InstructorSid}>
          <div className="top-div">
            <p className="inst-name">{data.InstructorDetail}</p>
            <p className="college">{data.CollegeName}</p>
            <Stars className="star" ratings={data.Rating} />
          </div>
          <div className="base-div">
            <Likes
              InitialLikes={data.LikeDetail}
              onLikeReceive={this.props.onLikePress}
            />

            <span className="rate-review">
              {this.props.cardData.SubmittedOnUtc}
            </span>
          </div>
        </div>
      );
    });
  }
}
