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
      /* rating: AppData.Ratings, */
      Likes: 40,
      ratings: AppData.Ratings,
      reviews: "today 13:45",
      instructorNames: AppData.Instructors
    };
  }

  instructorRating = () => {
    const details = this.state.data;
    for (let i = 0; i < details.length; i++) {
      let id = details[i];
      console.log(id.Ratings);
    }
  };

  NewRating = Value => {
    this.setState({ ratings: Value });
  };

  handleIncrease = () => {
    //console.log("[LIKE] I receive a click");
    const Likes = this.state.Likes;

    this.setState({ Likes: Likes + 1 });
  };

  ///

  ///
  render() {
    console.log(this.state.counter);
    console.log(this.state.ratings);

    const Ratings = this.state.ratings;

    const average = array => {
      let sums = {},
        counts = {},
        RateAggs = [],
        InstructorSid;
      for (let i = 0; i < array.length; i++) {
        InstructorSid = array[i].InstructorSid;
        if (!(InstructorSid in sums)) {
          sums[InstructorSid] = 0;
          counts[InstructorSid] = 0;
        }
        sums[InstructorSid] += array[i].Rating;
        counts[InstructorSid]++;
      }
      for (InstructorSid in sums) {
        RateAggs.push({
          InstructorSid: InstructorSid,
          Rating: Math.floor(sums[InstructorSid] / counts[InstructorSid])
        });
      }
      return RateAggs;
    };

    console.log(average(Ratings));

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
            dataSet={this.state.AppData}
            ratings={average(Ratings)}
            onIncrease={this.handleIncrease}
            Likes={this.state.Likes}
            review={this.state.reviews}
            instructors={this.state.instructorNames}
          />
        </div>
      </div>
    );
  }
}
