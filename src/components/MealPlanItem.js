import React from "react";
import "./MealPlanItem.css";

const MealPlanItem = props => {
  return (
    <li className="collection-item">
      <div>
        <span
          className={props.completed && "meal-striked"}
          onClick={props.handleMealClick}
        >
          {props.title}
        </span>
        {props.completed || (
          <button
            className="list-button red lighten-1 secondary-content"
            onClick={props.handleDelete}
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default MealPlanItem;
