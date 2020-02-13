
import React from 'react';
import YAxis from './axes/y-axis';
import XAxis from './axes/x-axis';
import Series from './bar-series/series';
import './App.css';

const getMinMax = (data,value) =>{
  let values = data.map(row=>row[value])
  values = values.sort((a,b)=>a-b)
  return {min:values[0],max:values[values.length-1] }
}

function App() {
  let data = [
    {cost:83,mode:2008},
    {cost:290,mode:2009},
    {cost:245,mode:2010},
    {cost:920,mode:2011},
    {cost:90,mode:2012},
    {cost:600,mode:2013},
    {cost:140,mode:2014},
    {cost:220,mode:2015},
  ]

  const getRandomNumber = n =>{
    // Math.random() * (max - min) + min;
    return Math.floor(Math.random() * 1000);
  }
  data = data.map(rec =>{
    rec.y = getRandomNumber()
    return rec
  })


  let minmax = getMinMax(data,"y")
  let totalHeight = 450
  let totalWidth = 800
  let bottomMargin = 50
  let leftMargin = 100
  let barWidth = 20
  
  return (
    <div className="chart-container" >
      <svg className="graph" aria-labelledby="title" role="img">
        <g className="grid y-grid" id="yGrid">
          <line stroke="#000" x1={leftMargin} x2={leftMargin} y1={0} y2={totalHeight - bottomMargin}></line>
        </g>
        <g className="grid x-grid" id="xGrid">
          <line 
            stroke="#000"
            x1={leftMargin} 
            x2={totalWidth} 
            y1={totalHeight - bottomMargin}  
            y2={totalHeight - bottomMargin}>
          </line> 
        </g>
        <XAxis data={data} totalWidth={totalWidth} totalHeight={totalHeight} bottomMargin={bottomMargin} />
        <YAxis totalWidth={totalWidth} leftMargin={leftMargin} totalHeight={totalHeight} bottomMargin={bottomMargin} minmax={minmax} />
        <g>
          <text x="10" y="200" className="label-title">Price</text>
        </g>
        <Series bottomMargin={bottomMargin} barWidth={barWidth} totalHeight={totalHeight} data={data}
          totalWidth={totalWidth} leftMargin={leftMargin} minmax={minmax} />
      </svg>
    </div >
  );
}

export default App;
