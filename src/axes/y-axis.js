
import React from 'react';
import { getRangeMax } from '../utils/axis-range'

const getInterval = (max,points) =>{
    return getRangeMax(max)/points
}

const getPointPosition = (max,i,yAxisHeight) =>{
    let interval = getInterval(max,10)
    return (interval *  i ) * yAxisHeight / getRangeMax(max )
}

const getDisplayText = (max,i) =>{
    let interval = getInterval(max,10)
    return interval *  i
}

const YAxis = props => {
    let { minmax,totalHeight,totalWidth,bottomMargin,leftMargin } = props
    let yAxisHeight = totalHeight 
    let yaxisPoints = []
    for (let i = 1; i < 11; i++) {
        yaxisPoints.push({ 
            x: leftMargin, 
            y: getPointPosition(minmax.max,i,yAxisHeight - bottomMargin ) , 
            value: getDisplayText(minmax.max,i) ,
        })
    }
    return (
        <g> 
            <g className="labels y-labels">
                {yaxisPoints.map((point,i) => {
                    let { x, y, value } = point
                    return (
                        <text key={i} x={x-20} y={yAxisHeight - y - bottomMargin  + 15}>{value}</text>
                    )
                })}
            </g>
            <g className="grid y-labels">
                {yaxisPoints.map((point,i) => {
                    let { x, y } = point
                    
                    return (
                        <line
                            key={i}
                            x1={x}
                            stroke ={"#dbdbdb"} 
                            x2={totalWidth}
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