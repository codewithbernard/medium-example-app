import React from 'react';

const MealPlanItem = (props) => {
  return <li>{props.meal} <button onClick={props.handleDelete}>Delete</button></li>;
}

export default MealPlanItem;
