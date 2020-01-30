
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
  const data = [
    {x:2008,y:83},
    {x:2009,y:290},
    {x:2010,y:245},
    {x:2011,y:920},
    {x:2012,y:90},
    {x:2013,y:600},
    {x:2014,y:140},
    {x:2015,y:220},
  ]

  let minmax = getMinMax(data,"y")
  let totalHeight = 500
  let totalWidth = 800
  let bottomMargin = 50
  let leftMargin = 100
  let barWidth = 20
  
  return (
    <div className="chart-container" >
      <svg className="graph" aria-labelledby="title" role="img">
        <title id="title">A line chart showing some information</title>
        <g className="grid y-grid" id="yGrid">
          <line x1={leftMargin} x2={leftMargin} y1={0} y2={totalHeight - bottomMargin}></line>
        </g>
        <g className="grid x-grid" id="xGrid">
          <line 
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
          totalWidth={totalWidth} leftMargin={leftMargin} />
      </svg>
    </div >
  );
}

export default App;
