import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Axios from "axios"


function App() {

  //סטאיט המכיל את כל ההוצאות
  const [expenses, setExpenses] = useState([]);

  //מתג הבודק עם הוצאה חדשה הוספה בשביל להפעיל את הפונקציית יוז-אפאקט ולהביא נתונים חדשים מהשרת
  const [wasNewExpenseAdded, setWasNewExpenseAdded] = useState(false)


  //יוז-אפאקט זה הוק המאריץ את הפונקציה בתוכה כל פעם שמשהו שהגדרתי משתנה
  useEffect(() =>
    //פונקציה המביא את הנתונים מהשרת וקובעת אותם בתוך סטייט אקספאנסס 
    { async function getExpenses() {
      const res = await Axios.get('http://localhost:8000/get_expenses');
      const response = res.data;
      setExpenses(response)
      setWasNewExpenseAdded(false)
    };
      getExpenses();
    }, [wasNewExpenseAdded]); //הפונקציה תופעל כל פעם שהסטייט הזה ישתנה


  const addExpenseHandler = (expense) => {

    //שולח נתונים של הוצאה חדשה לטבלה בשרת
    Axios.post("http://localhost:8000/insert_new_expenses", {
        title: expense.title,
        amount: expense.amount,
        date: (new Date(expense.date).toISOString().slice(0, 19).replace('T', ' ')),
        category: expense.category
      });

      // קובע סטייט חדש המעפיל קריאה חדשה המביאה את כל הנתונים מחדש מהשרת
      setWasNewExpenseAdded(true)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
