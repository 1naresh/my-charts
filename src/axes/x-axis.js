
import React from 'react';

const XAxis = props => {
  let { barWidth, bottomMargin, resData, totalHeight, leftMargin, seriesWidth, xPos,columns } = props
  return (
    <g>
      {resData.fieldValues.map((fieldValueObj, i) => {
        let partWidth = (seriesWidth) / resData.fieldValues.length
        xPos = typeof(xPos) !== "number" ? 0 : xPos
        let partPos = (partWidth * i) + xPos
        let {fieldName} = resData
        let columnIndex = columns.findIndex(column=>column.name === fieldName)
        let yPos = (columnIndex * 20 )  + 15
        return (
          <g key={i} >
            {fieldValueObj.children && (
              <XAxis resData={fieldValueObj.children} bottomMargin={bottomMargin} barWidth={barWidth} columns={columns}
                totalHeight={totalHeight} seriesWidth={partWidth} xPos={partPos} leftMargin={leftMargin} />
            )}
            <text x={partPos + leftMargin + (partWidth / 2) - 20} 
              y={yPos} >
              {fieldValueObj.fieldValue} 
            </text>
            <line 
              stroke="#000"
              x1={leftMargin + partPos} 
              y1={ yPos + 5 } 
              x2={leftMargin + partPos + partWidth}
              y2={ yPos + 5 }  >
            </line>
            <line
              stroke="#000"
              x1={partPos + leftMargin + (partWidth) }
              x2={partPos + leftMargin + (partWidth) }
              y1={ yPos - 15 }
              y2={ yPos + 5 }>
            </line>
          </g>
        )
      })}
    </g>
  )
}

export default XAxis;

















{/* <g>
  <g className="labels x-labels">
    {data.map((row, i) => {
      let x = (i + 2) * Math.floor((totalWidth - 100) / data.length)
      return (
        <text key={i} x={x - 30} y={totalHeight - bottomMargin + 30} >{row[column.name]} </text>
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
          x1={x - 30}
          x2={x - 30}
          y1={totalHeight - bottomMargin}
          y2={totalHeight - bottomMargin + 10}>
        </line>
      )
    })}
  </g>
</g> */}