import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';
import MealPlan from './MealPlan';

class App extends Component {
  render() {
    return [
      <Header />,
      <DayChecker />,
      <MealPlan />
    ];
  }
}

export default App;
