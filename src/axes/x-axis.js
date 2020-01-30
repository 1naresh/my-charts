
import React from 'react';

const XAxis = props => {
  let { data, totalHeight,totalWidth,bottomMargin } = props
  return (
    <g>

      <g className="labels x-labels">
        {data.map((row, i) => {
          let x = (i + 2) * Math.floor((totalWidth - 100) / data.length)
          return (
            <text key={i} x={x-30} y={totalHeight - bottomMargin + 30} >{row.x} </text>
          )
        })}
        <text x={totalWidth / 2} y={totalHeight - bottomMargin + 50} className="label-title">Year</text>
      </g>
      <g className="grid x-labels">
        {data.map((row, i) => {
          let x = (i + 2) * Math.floor((totalWidth - 100) / data.length)
          return (
            <line
              key={i}
              x1={x-30}
              x2={x-30}
              y1={totalHeight - bottomMargin}
              y2={totalHeight - bottomMargin + 10 }>
            </line>
          )
        })}
      </g>
    </g>
  )
}

export default XAxis;