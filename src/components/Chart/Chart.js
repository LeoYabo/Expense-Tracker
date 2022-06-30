import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'


const Chart = (props) => {

    //creating an array consisting of the values of the values inside the dataPoint array that is full of objects
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    console.log(dataPointValues)
    
    //reduce לוקח את כל ההוצעות מתוך המערך ואז מוצא את הסכום שלהם
    const totalMaximum = dataPointValues.reduce((a, b) => a + b, 0)

    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />))}
        </div>
    )
}

export default Chart