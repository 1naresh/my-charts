

import React from 'react';
import { getRangeMax } from '../utils/axis-range'

const Series = props => {
  let { barWidth,bottomMargin,resData,totalHeight,leftMargin,minmax,seriesWidth,xPos,topMargin } = props
  return (
    <g>
      {resData.fieldValues.map((fieldValueObj,i)=>{
        if(fieldValueObj.children){
          let partWidth = Math.floor((seriesWidth) / resData.fieldValues.length)
          xPos = typeof(xPos) !== "number" ? 0 : xPos
          let partPos = partWidth * (i) + xPos
          return (
            <g  key={i} >
              <Series resData={fieldValueObj.children} bottomMargin={bottomMargin} barWidth={barWidth} 
                totalHeight={totalHeight} fieldValueObj={fieldValueObj} seriesWidth={partWidth} 
                leftMargin={leftMargin} minmax={minmax} xPos={partPos} topMargin={topMargin} />
              <line stroke="#999" 
                x1={partPos + partWidth + leftMargin } 
                x2={partPos + partWidth + leftMargin} 
                y1={topMargin} 
                y2={totalHeight + 10}>
              </line>
              
            </g>
          )
        }else{
          let pointWidth = Math.floor((seriesWidth) / resData.fieldValues.length)
          let chartAreaHeight = totalHeight - bottomMargin
          let maxRange = getRangeMax(minmax.max)
          let { index, value  } = fieldValueObj
          let pointXPos = (i+1) * pointWidth - (barWidth / 2)  + xPos + leftMargin - 30
          let barHieght = value / maxRange * chartAreaHeight
          return(
            <g key={i} >
              <text x={pointXPos} y={chartAreaHeight + topMargin - barHieght - 5} >{value}</text>
              <rect x={pointXPos} y={chartAreaHeight + topMargin  - barHieght} width={barWidth} fill={"#357cd2"}
                height={barHieght} >
                <animate attributeName="y" values={`460;${chartAreaHeight - barHieght + topMargin}`} dur="1s" repeatCount="1" />
                <animate attributeName="height" values={`0;${barHieght}`} dur="1s" repeatCount="1" />
              </rect>
            </g>
          )
        }
      })}
    </g>
  )
}

export default Series;