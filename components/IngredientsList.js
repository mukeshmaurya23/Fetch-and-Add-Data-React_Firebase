import React from "react";
import Card from "../UI/Card";
import styles from "./IngredientsList.module.css";
const IngredientsList = (props) => {
  return (
    <section className={styles["ingredient-list"]}>
      <Card>
        <h2>Loaded Ingredients</h2>
        <ul>
          {props.ingredient.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>{item.amount}</span>
              <button onClick={props.removeTerm.bind(this, item.id)}>X</button>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default IngredientsList;
