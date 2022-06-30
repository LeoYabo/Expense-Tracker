import "./ExpenseDate.css"

function ExpenseDate(props) {

  const abc = Date.parse(props.date)
  console.log(abc)
  const aa = new Date(abc)
  console.log(aa)


  const month = aa.toLocaleString("en-US", { month: "long" });
  const day = aa.toLocaleString("en-US", { day: "2-digit" });
  const year = aa.getFullYear();

  return (
    <div className="expense-date">
      <div className='expense-date__month'>{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
