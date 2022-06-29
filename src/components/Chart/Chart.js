import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'


const Chart = (props) => {

    //creating an array consisting of the values of the values inside the dataPoint array that is full of objects
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    console.log(dataPointValues)
    
    //math.max(<values spread by commas>) finds the biggest value in an array and returns it
    //because the max() method doesnt take an array, we can use the ... operator to pull the values out of the array, to be spread
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