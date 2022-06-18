
import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

function ExpenseItem(props) {
  //deconstructed useState given the values of title and setTitle()
  const [title, setTitle] = useState(props.title);

  // handles the click event from the button
  const clickHandler = ()=>{
    let newTitle = "This title was changed"
    //when this handler function happens, it will set off the setTitle() function and will reload the component
    setTitle(newTitle)
    console.log("i was clicked")
  }

  return (
    <Card className = "expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}
        </div>
        <button onClick={clickHandler}>click me!</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
