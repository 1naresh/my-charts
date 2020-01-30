
import React from 'react';

const getRangeMax = (val,d)=>{
    if(Math.floor(val/10) === 0 ){
        return (val+1) * d
    }else{
        d = d * 10
        return getRangeMax(Math.floor(val/10),d)
    }
}

const getRange = (max,points) =>{
    return (getRangeMax(max)-0)/points 
}

const YAxis = props => {
    let { minmax,totalHeight,bottomMargin,leftMargin } = props
    let yAxisHeight = totalHeight 
    let yaxisPoints = []
    for (let i = 0; i < 10; i++) {
        yaxisPoints.push({ 
            x: leftMargin, 
            y: Math.floor(i * minmax.max / 10 * yAxisHeight / minmax.max), 
            value: Math.floor(i * minmax.max / 6 * yAxisHeight / minmax.max),
        })
    }
    return (
        <g> 
            <g className="labels y-labels">
                {yaxisPoints.map((point,i) => {
                    let { x, y, value } = point
                    return (
                        <text key={i} x={x-20} y={yAxisHeight - y - bottomMargin}>{value}</text>
                    )
                })}
            </g>
            <g className="grid y-labels">
                {yaxisPoints.map((point,i) => {
                    let { x, y } = point
                    return (
                        <line
                            key={i}
                            x1={x-10}
                            x2={x}
                            y1={yAxisHeight - y - bottomMargin}
                            y2={yAxisHeight - y - bottomMargin}>
                        </line>
                    )
                })}
            </g>
        </g>

    )
}

export default YAxis;