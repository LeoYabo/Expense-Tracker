import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = (props)=>{
  //conditional rendering based on if filteredList array is empty    
  if(props.filteredList.length===0){
    return(<h2 className='expenses-list__fallback'>No expenses found.</h2>)}
     //below, we use the map function to create an ExpenseItem component for each item in the array items that are in the filteredList array variable
    return(
        <ul className='expenses-list'>
            {props.filteredList.map((expense) => (
            <ExpenseItem
              //adding key props so that react can identify them
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            ))}
        </ul>
    )
}

export default ExpenseList