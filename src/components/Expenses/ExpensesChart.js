import React from 'react'
import Chart from '../Chart/Chart'

const ExpensesChart = props => {

    const chartDataPoints = [
        {label: 'Jan',value:0},
        {label: 'Feb',value:0},
        {label: 'Mar',value:0},
        {label: 'Apr',value:0},
        {label: 'May',value:0},
        {label: 'Jun',value:0},
        {label: 'Jul',value:0},
        {label: 'Aug',value:0},
        {label: 'Sep',value:0},
        {label: 'Oct',value:0},
        {label: 'Nov',value:0},
        {label: 'Dec',value:0}
    ];

    //a loop that will add the value of expenses for that particular month to the array of objects chartDataPoints
    for(const expense of props.expenses){

        //שוב מקבלים מספר כסטרינג, אז צריכים לאפוך אותו למספר
        const abc = Date.parse(expense.date)
        const aa = new Date(abc)
        const expenseMonth = aa.getMonth(); //starting at 0 => january is at index 0
        
        chartDataPoints[expenseMonth].value += (parseFloat(expense.amount))
    }

    return(
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart