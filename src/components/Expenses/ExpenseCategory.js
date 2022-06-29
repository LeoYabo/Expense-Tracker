import React from 'react';

import './ExpenseCategory.css';

const ExpenseCategory = (props) => {

  const dropdownChangeHandler = (event) => {
    console.log(event.target.value);
    props.onSelectCategory(event.target.value)
  }  

  return (
    <div className='category-filter'>
      <div className='category-filter__control'>
        <label>Category</label>
        <select value={props.selected} id='categoryFilter' onChange={dropdownChangeHandler}>
          <option selected disabled></option>
          <option value='Supermarket'>Supermarket</option>
          <option value='Restaurants'>Restaurants</option>
          <option value='Clothes'>Clothes</option>
          <option value='Misc'>Misc</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseCategory;