import React, { Component } from "react";
import { RatingCard } from "./rating-card";
/* import { AppData, LikesCount } from './data'; */
import "./app.css";
import { aggregateData } from "./data";
import { AppData } from "./data";
import { LikesCount } from "./data";

/// App
export class App extends Component {
  /// Constructor
  constructor(props) {
    super(props);
    this.state = {
      data: aggregateData()
    };
  }

  render() {
    //console.log(this.state.data);
    //console.log(this.state.Likes);

    const Data = this.state.data;
    //console.log(average(Ratings));

    //console.log(Schools);
    const Instructors = AppData.Instructors;
    const Likes = AppData.Likes;
    //console.log(Data);

    // console.log(RateAggs);

    // iterate through the rating data to fetch out needed info and pass to the card component

    Data.map(rating => {
      AppData.Ratings.some(item => {
        if (rating.InstructorSid === item.InstructorSid) {
          /* console.log(school.Name); */
          return (rating.SchoolDetails = item.SchoolSid);
        }
      });
      Instructors.some(instructor => {
        if (rating.InstructorSid === instructor.InstructorSid) {
          /* console.log(instructor.Instructor); */
          return (rating.InstructorDetail = instructor.Instructor);
        }
      });
      Likes.some(Like => {
        if (rating.InstructorSid === Like.InstructorSid) {
          return (rating.LikeDetail = Like.Likes);
        }
      });
      AppData.Schools.some(schoolname => {
        if (rating.SchoolDetails === schoolname.SchoolSid) {
          return (rating.CollegeName = schoolname.Name);
        }
      });
      // console.log(RateAggs);
    });

    return (
      <div className="main-container">
        <div className="hamburger" onClick={this.handleClick}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <div className="logo">R.app</div>
        <br />

        <div>
          <RatingCard
            cardData={Data}
            initialLikes={Data.map(item => {
              item.LikeDetail;
            })}
            onLikePress={this.handleIncrease}
          />
        </div>
      </div>
    );
  }
}
