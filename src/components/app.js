import React, { Component } from "react";
import { RatingCard } from "./rating-card";
/* import { AppData } from './data'; */
import "./app.css";
import { AppData } from "./data";

/// App
export class App extends Component {
  /// Constructor
  constructor(props) {
    super(props);
    this.state = {
      data: AppData,
      ratings: AppData.Ratings,
      /* rating: AppData.Ratings, */
      Likes: AppData.Likes
    };
  }

  ///

  ///
  render() {
    /*     console.log(this.state.ratings); */

    const Data = this.state.data;
    //console.log(average(Ratings));

    //console.log(Schools);
    const Instructors = Data.Instructors;
    const Likes = Data.Likes;
    //console.log(Data);

    // get the aggregate of ratings per instructor
    let sums = {},
      counts = {},
      RateAggs = [],
      InstructorSid;

    for (let i = 0; i < AppData.Ratings.length; i++) {
      InstructorSid = AppData.Ratings[i].InstructorSid;

      if (!(InstructorSid in sums)) {
        sums[InstructorSid] = 0;
        counts[InstructorSid] = 0;
      }
      sums[InstructorSid] += AppData.Ratings[i].Rating;
      counts[InstructorSid]++;
    }
    for (InstructorSid in sums) {
      RateAggs.push({
        InstructorSid: InstructorSid,

        Rating: Math.floor(sums[InstructorSid] / counts[InstructorSid])
      });
    }

    // console.log(RateAggs);

    // iterate through the rating data to fetch out needed info and pass to the card component

    RateAggs.map(rating => {
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
          <RatingCard data={RateAggs} initialLikes={RateAggs.LikeDetail} />
        </div>
      </div>
    );
  }
}
