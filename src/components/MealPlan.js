import React, { Component } from 'react';
import MealPlanItem from './MealPlanItem';
import _ from 'lodash';

class MealPlan extends Component {
  state = {
    meal: '',
    meals: [],
    showMessage: ''
  };

  removeMeal(mealToRemove) {
    const meals = this.state.meals.filter(meal => meal !== mealToRemove);
    this.setState({
      meals: meals
    });
  }

  renderMeals() {
    return _.map(this.state.meals, meal => <MealPlanItem handleDelete={() => this.removeMeal(meal)} meal={meal} />);
  }

  componentWillMount() {
    this.setState({meals: ["Eggs with bacon", "Spaghetti carbonara", "Oatmeal"]});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.meals.length < this.state.meals.length) this.showMessage('New meal added');
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const meal = this.state.meal;
    if (this.state.meals.indexOf(meal) === -1) {
      this.setState({
        meals: [...this.state.meals, meal],
        meal: ""
      });
    } else {
      this.showMessage(`${meal} is already on the list`);
    }
  }

  showMessage = (message) => {
    this.setState({showMessage: message});
    setTimeout(() => this.setState({showMessage: ''}), 1000);
  }

  render() {
    return(
      <div>
        <h2>Today you should eat this</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            onChange={e => this.setState({meal: e.target.value})}
            value={this.state.meal}
            type="text"
          />
          <button
            type="submit"
            disabled={this.state.meal === ""}>Add meal</button>
        </form>
        {this.state.showMessage || null}
        <ul>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}

export default MealPlan;
