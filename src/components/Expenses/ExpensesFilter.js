import React from 'react';

import './ExpensesFilter.css';



const ExpensesFilter = (props) => {

  const dropdownChangeYearHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilterYear(event.target.value)
  } 
  
  const dropdownChangeCategoryHandler = (event) => {
    console.log(event.target.value);
    props.onChangeFilterCategory(event.target.value)
  }  

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.yearSelected} id='yearFilter' onChange={dropdownChangeYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
        <label>Category</label>
        <select value={props.categorySelected} id='categoryFilter' onChange={dropdownChangeCategoryHandler}>
          <option value='Supermarket'>Supermarket</option>
          <option value='Restaurants'>Restaurants</option>
          <option value='Clothes'>Clothes</option>
          <option value='Misc'>Misc</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;