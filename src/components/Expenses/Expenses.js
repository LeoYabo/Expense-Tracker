import React, {useState} from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList"
import ExpensesChart from './ExpensesChart';
import "./Expenses.css"
import Card from "../UI/Card"

function Expenses (props) {

  const [filteredYear, setFilteredYear] = useState('2020')
  const [filteredCategory, setFilteredCategory] = useState('Supermarket')

  //this function lifts the state up of the selected year in the filter
  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)}

  const filterCategoryChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory)}  

  //this variable filters the list of expense items passed from App.js based on the year selected in the dropdown menu
  // const filteredList = props.items.filter(
  //   function(oneExpense) {
  //     return oneExpense.date.getFullYear().toString()===filteredYear && oneExpense.category===;

  //   })

    const filteredList = props.items.filter((oneExpense)=> {
      return oneExpense.date.getFullYear().toString()===filteredYear && oneExpense.category===filteredCategory})
console.log("lioirr", filteredList)
  return (
    //notice that because Card is a custom html tag(component) the attribute className(or any other html attributes)
    //are not recognized and so it acts like a prop that needs to be passed to the Card component where the attribute
    //needs to be handled inside a div there, to be recognized like a html attribute
    <Card className="expenses"> 
      <ExpensesFilter 
        onChangeFilterYear = {filterYearChangeHandler}
        onChangeFilterCategory={filterCategoryChangeHandler}
        yearSelected = {filteredYear}
        categorySelected = {filteredCategory} 
        />
      <ExpensesChart 
        expenses={filteredList} />
      <ExpenseList
        filteredList={filteredList}/>
    </Card>
  );
}

export default Expenses
