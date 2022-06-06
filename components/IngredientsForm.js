import React, { useState } from "react";
import styles from "./IngredientsForm.module.css";
import Card from "../UI/Card";
const IngredientsForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredTitle, enteredAmount);
    props.add({
      title: enteredTitle,
      amount: enteredAmount,
    });
  };
  return (
    <>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <Card>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={titleChangeHandler} />
          </div>
          <div className={styles.control}>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={amountChangeHandler} />
          </div>
          <div className={styles.actions}>
            <button type="submit">Add Ingredients</button>
          </div>
        </Card>
      </form>
    </>
  );
};

export default IngredientsForm;
