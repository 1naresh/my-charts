

import React from 'react';

const Series = props =>{
    let { barWidth,bottomMargin,totalHeight,data,totalWidth,leftMargin } = props
    return(
        <g className="bar">
          {
            data.map((bar,i)=>{
              let x = (i + 2) * Math.floor((totalWidth - leftMargin) / data.length) - (barWidth/2)
              let { y } = bar
              y = Math.floor(y * 0.6)
              {/* console.log(y) */}
              return(
                <rect key={i} x={x-30} y={totalHeight-y-bottomMargin} width={barWidth} height={y} ></rect>
              )
            })
          }
        </g>
    )
}

export default Series;