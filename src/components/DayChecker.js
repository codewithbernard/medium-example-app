import React, { Component } from "react";

class DayChecker extends Component {
  getDayName(number) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return days[number];
  }

  render() {
    // Get current date
    let today = new Date().getDay();
    // If it is weekday
    if (today === 6 || today === 0)
      return (
        <h5 className="center">
          Today is {this.getDayName(today)} - You can watch TV all day today
        </h5>
      );
    // If it is weeken
    return (
      <h5 className="center">
        Today is {this.getDayName(today)} - You should go to work today
      </h5>
    );
  }
}

export default DayChecker;
