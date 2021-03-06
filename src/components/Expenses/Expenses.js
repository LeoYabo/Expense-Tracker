import React, {useState} from 'react'
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList"
import ExpensesChart from './ExpensesChart';
import "./Expenses.css"
import Card from "../UI/Card"

function Expenses (props) {

  const [filteredYear, setFilteredYear] = useState('2022')
  const [filteredCategory, setFilteredCategory] = useState('Supermarket')

  //this function lifts the state up of the selected year in the filter from the expensesFilter.js file
  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)}

  //this function lifts the state up of the selected category in the filter from the expensesFilter.js file  
  const filterCategoryChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory)}  

   //this variable filters the list of expense items passed from App.js based on the year selected in the dropdown menu
    const filteredList = props.items.filter((oneExpense)=> {
      //בגלל שאנחנו מקבלים סטרינג בתאריך מהשרת, אנחנו צריכים שוב לעביר בחזרה לאובייקט של תאריך של ג'אבה-סקריפט
      const abc = Date.parse(oneExpense.date)
      const aa = new Date(abc)
      //מייצר סינון של הוצאות לפי קטגוריה ושנה
      return aa.getFullYear().toString()===filteredYear && oneExpense.category===filteredCategory})

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
