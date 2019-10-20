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
      counter: 40,
      ratings: 2 /* AppData.Ratings, */,
      reviews: "today 13:45",
      instructorNames: AppData.Instructors.Instructor
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
    const counter = this.state.counter;

    this.setState({ counter: counter + 1 });
  };

  ///

  ///
  render() {
    console.log(this.state.counter);
    console.log(this.state.ratings);

    const Rating = this.state.ratings;

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
            ratings={Rating}
            onIncrease={this.handleIncrease}
            counter={this.state.counter}
            review={this.state.reviews}
            instructors={this.state.instructorNames}
          />
          <RatingCard
            ratings={Rating}
            onIncrease={this.handleIncrease}
            counter={this.state.counter}
            review={this.state.reviews}
            instructors={this.state.instructorNames}
          />
        </div>
      </div>
    );
  }
}
