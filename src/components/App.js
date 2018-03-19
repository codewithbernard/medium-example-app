import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import React, { Component } from "react";
import DayChecker from "./DayChecker";
import Header from "./Header";
import MealPlan from "./MealPlan";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <DayChecker />
        <MealPlan />
      </div>
    );
  }
}

export default App;
