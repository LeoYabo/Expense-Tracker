import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import axios from 'axios';

const NewExpense = (props) =>{

    const [buttonStatus, setButtonStatus] = useState("false")
    
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        //prop which contains a function from app.js to capture the data from this file and pass it up
        props.onAddExpense(expenseData)
    }

    //lifting up the state of ButtonStatus when pressed in ExpenseForm.js
    const cancelButtonHandler = (wasPressed)=>{
        setButtonStatus(wasPressed)
    }

    
    const buttonPressHandler = () => {
        setButtonStatus("true")
    }

    //conditional rendering that depends if the button was pressed (buttonStatus is true or false)
    if(buttonStatus==="false"){
        return(
            <div className='new-expense'>
                <button type='submit' onClick={buttonPressHandler}>Add New Expense</button>
            </div>
        )
    }
    return (<div  className = 'new-expense'>
        {/* we use to start the name of a prop which is used to pass a function which will capture the data from it's child "on" */}
       <ExpenseForm 
            onSaveExpenseData = {saveExpenseDataHandler}
            onCancel = {cancelButtonHandler}
       />
    </div>)
};

export default NewExpense