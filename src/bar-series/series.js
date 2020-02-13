

import React from 'react';
import { getRangeMax } from '../utils/axis-range'

const Series = props =>{
    let { barWidth,bottomMargin,totalHeight,data,totalWidth,leftMargin,minmax } = props
    let chartAreaHeight = totalHeight - bottomMargin
    let maxRange = getRangeMax(minmax.max)
    return(
        <g className="bar">
          {
            data.map((bar,i)=>{
              let x = (i + 2) * Math.floor((totalWidth - leftMargin) / data.length) - (barWidth/2)
              let { y } = bar
              let barHieght = y/maxRange * chartAreaHeight
              return(
                <g  key={i} >
                  <text x={x-30} y={chartAreaHeight - barHieght  - 5} >{y}</text>
                  <rect x={x-30} y={chartAreaHeight - barHieght } width={barWidth} fill={"#357cd2"} 
                    height={barHieght} >
                    <animate attributeName="y" values={`400;${chartAreaHeight - barHieght}`} dur="1s" repeatCount="1" />
                    <animate attributeName="height" values={`0;${barHieght}`} dur="1s" repeatCount="1" />
                  </rect>
                </g>
              )
            })
          }
        </g>
    )
}

export default Series;