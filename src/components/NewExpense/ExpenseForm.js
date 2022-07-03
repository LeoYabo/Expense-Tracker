import React, { useState } from "react";
import "./ExpenseForm.css";
import "../Expenses/ExpenseCategory";
import ExpenseCategory from "../Expenses/ExpenseCategory";


//the props that is passed here is in the form of the the function "onSaveExpenseData" from NewExpense.js
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCategory, setCategory] = useState("");

  // "event" is a javascript object that contains information about the thing that triggered the event
  const titleChangeHandler = (event) => {
    // sets the new EnteredTitle value to be whatever the input of the user by tapping into the value of the input
    setEnteredTitle(event.target.value);
    
  };
  //the handler functions deal with the changes to the states
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSelectCategory = (categorySelected) => {
    console.log(categorySelected);
    setCategory(categorySelected);
  };

  //handles the the event when the user submits the form
  const submitHandler = (event) => {
    //prevents default behavior of reloading the page uppon form submit
    event.preventDefault();

    //checks that all fields are not empty
    if (
      enteredAmount === 0 ||
      enteredTitle === "" ||
      enteredCategory === "" ||
      enteredDate === ""
    ) {
      alert("Please enter valid inputs");
    } else {

      //saving the value states of all the user input values inside a js object
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: (new Date(enteredDate)),
        category: enteredCategory,
      };

      //sending the expenseData value up to NewExpense.js inside of the argument of the prop that was passed down from it
      props.onSaveExpenseData(expenseData);

      //resetting the values of the state variables to be empty like in the beginning
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");

      //close the form once a new expense is added
      props.onCancel("false");
    }
  };

  const buttonWasClicked = () => {
    props.onCancel("false");
  };

  return (
    //when a form has a button of type submit, we can use the onSubmit js property, to handle what happens when the form is submitted
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            //onChange is a property that registeres all changes and we pass in our handler function, when change is detected
            onChange={titleChangeHandler}
            // "value" is our way of passing back to the form a value that we set when the form submits - in this case it will be an empty string
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
        <div className="new-expense__control">
          <ExpenseCategory onSelectCategory={onSelectCategory} />
        </div>
      </div>
      <div className="new-expense__actions">
        {/*its important that the form will have a button of type submit  */}
        <button type="submit">Add Expense</button>
        <button type="submit" onClick={buttonWasClicked}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
