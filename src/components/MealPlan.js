import React, { Component } from "react";
import MealPlanItem from "./MealPlanItem";
import _ from "lodash";

class MealPlan extends Component {
  state = {
    meal: "",
    meals: {},
    showMessage: ""
  };

  removeMeal(mealToRemove) {
    const meals = this.state.meals;
    delete meals[mealToRemove];
    this.setState({
      meals: meals
    });
  }

  completeMeal(mealToComplete) {
    const meals = this.state.meals;
    if (!meals[mealToComplete].completed) {
      meals[mealToComplete].completed = true;
      this.setState({
        meals: meals
      });
    }
  }

  renderMeals() {
    return _.map(this.state.meals, (value, key) => (
      <MealPlanItem
        handleMealClick={() => this.completeMeal(key)}
        handleDelete={() => this.removeMeal(key)}
        title={key}
        completed={value.completed}
      />
    ));
  }

  componentWillMount() {
    this.setState({
      meals: {
        "Spaghetti carboanra": {
          completed: false
        },
        Risotto: {
          completed: false
        },
        Oatmeal: {
          completed: false
        }
      }
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { meals, meal } = this.state;
    if (!meals[meal]) {
      meals[meal] = { completed: false };
      this.setState({
        meals: meals,
        meal: ""
      });
      this.showMessage("New meal added");
    } else {
      this.showMessage(`${meal} is already on the list`);
    }
  };

  showMessage = message => {
    this.setState({ showMessage: message });
    setTimeout(() => this.setState({ showMessage: "" }), 1000);
  };

  render() {
    return (
      <div className="row">
        <form className="col s6 offset-s3" onSubmit={e => this.handleSubmit(e)}>
          <div className="row">
            <div className="col s8 input-field">
              <input
                id="meal"
                onChange={e =>
                  this.setState({
                    meal: e.target.value
                  })
                }
                value={this.state.meal}
                type="text"
              />
              <label for="meal">Meal</label>
            </div>
            <div className="col s4">
              <button
                style={{ marginTop: 15 }}
                className="btn"
                type="submit"
                disabled={this.state.meal === ""}
              >
                Add
              </button>
            </div>
          </div>
        </form>
        <ul className=" col s8 offset-s2 collection with-header">
          <li className="collection-header">
            <h4>Don't remember to eat</h4>
          </li>
          {this.renderMeals()}
        </ul>
      </div>
    );
  }
}

export default MealPlan;
