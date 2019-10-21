///
/// Stars
///

import React, { Component } from "react";
import "./stars.css";

///
/// Stars
///
/// Props --
/// rating: how many filled stars to display.
/// onpress: a callback function called when a star is pressed.
///
export class Stars extends Component {
  ///
  render() {
    /// Sample props.
    const Rating = this.props.ratings;
    console.log(Rating);

    /// Generate markup.
    return (
      <div className="star-block">
        {Rating >= 1 && (
          <div className="star active" onClick={this.OnClicked}></div>
        )}

        {Rating >= 2 && (
          <div className="star active" onClick={this.OnClicked}></div>
        )}
        {Rating < 2 && <div className="star" onClick={this.OnClicked}></div>}

        {Rating >= 3 && (
          <div className="star active" onClick={this.OnClicked}></div>
        )}
        {Rating < 3 && <div className="star" onClick={this.OnClicked}></div>}

        {Rating >= 4 && (
          <div className="star active" onClick={this.OnClicked}></div>
        )}
        {Rating < 4 && <div className=" star" onClick={this.OnClicked}></div>}

        {Rating >= 5 && (
          <div className="star active" onClick={this.OnClicked}></div>
        )}
        {Rating < 5 && <div className="star" onClick={this.OnClicked}></div>}
      </div>
    );
  }
}
