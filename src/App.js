
import React from 'react';
import YAxis from './axes/y-axis';
import XAxis from './axes/x-axis';
import Series from './bar-series/series';
import {getCube,resData} from './utils/cube';
import './App.css';

const getMinMax = (data,value) =>{
  let values = data.map(row=>row[value])
  values = values.sort((a,b)=>a-b)
  return {min:values[0],max:values[values.length-1] }
}
let data = [
  {cost:83,mode: "cash" },
  {cost:290,mode: "card" },
  {cost:245,mode: "net B" },
  {cost:920,mode: "phonepe" },
  {cost:90,mode: "gpay" },
  {cost:600,mode: "paytm" },
]

const getRandomNumber = n =>{
  return Math.floor(Math.random() * 1000);
}
data = data.map(rec =>{
  rec.y = getRandomNumber()
  return rec
})

// console.log(getCube(data))

let minmax = getMinMax(data,"y")
let totalHeight = 450
let totalWidth = 800
let bottomMargin = 50
let topMargin = 60
let leftMargin = 100
let barWidth = 20

let columns = [
  {name:"mode"},
  {name:"medium"},
  {name:"source"}
]


function App() {
  return (
    <div className="chart-container" >
      <svg className="graph" aria-labelledby="title" role="img">
        <g className="grid y-grid" id="yGrid">
          <line stroke="#000" x1={leftMargin} x2={leftMargin} y1={0} y2={totalHeight + 10 }></line>
        </g>
        <g className="grid x-grid" id="xGrid">
          <line 
            stroke="#000"
            x1={leftMargin} 
            x2={totalWidth} 
            y1={totalHeight + 10 }  
            y2={totalHeight + 10}>
          </line> 
        </g>
        <XAxis resData={resData} bottomMargin={bottomMargin} barWidth={barWidth} totalHeight={totalHeight}
          seriesWidth={totalWidth - leftMargin} leftMargin={leftMargin} columns={columns} />
        <YAxis totalWidth={totalWidth} leftMargin={leftMargin} totalHeight={totalHeight} bottomMargin={bottomMargin} minmax={minmax} />
        <g  className="bar" >
          <Series resData={resData} bottomMargin={bottomMargin} barWidth={barWidth} totalHeight={totalHeight} 
            seriesWidth={totalWidth - leftMargin} leftMargin={leftMargin} minmax={minmax} topMargin={topMargin} />
        </g>
      </svg>
    </div >
  );
}

export default App;
