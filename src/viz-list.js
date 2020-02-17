

import React, { useState } from 'react';



const Dropdown = props =>{
    let initVizList = [
        {name:"text"},
        {name:"bar"},
    ]
    const [show,setShow] = useState(true)
    const [vizList,setVizList] = useState(initVizList)
    let { activeViz } = props
    const setActiveViz = vizType =>{
        props.setActiveViz(vizType)
        setShow(false)
    }
    return(
        <div style={{position:"absolute",right:"0px",top:"0px",width:"200px",border:"1px solid black",cursor:"pointer"}}  >
            <div
                onClick={e=> setShow(!show) }  
                style={{borderBottom:"1px solid black",padding:"0px 5px"}} >
                <div style={{float:"left"}} >{activeViz}</div>
                <div style={{float:"right"}} >^</div>
            </div> 
            {show && <ul style={{clear:"both",borderTop:"1px solid black",padding:"0px",margin:"0px",listStyle:"none"}} >
                {vizList.map(viz=>{
                    let isActive = viz.name === activeViz ? true : false
                    console.log(isActive,activeViz)
                    return(
                        <li 
                            onClick={e => setActiveViz(viz.name) }
                            style={{padding:"0px 5px",background:isActive ? "#ccc" : "#fff" }}
                            key={viz.name} > 
                            {viz.name} 
                        </li>
                    )
                })}
            </ul> }
        </div>
    )
}


export default Dropdown