

import React from 'react';
import './styles.css'

class App extends React.Component{
    state={
        top:0
    }
    componentDidMount(){
        // setInterval(()=>{
        //     this.setState(state=>{
        //         let top = state.top === 50 ? 0 : state.top + 5
        //         return {...state,top}
        //     })
        // },1000)
    }
    render(){
        console.log(this.state)
        let { top } = this.state
        return(
            <div >
                <div className="wish1" > hello </div>
                {/* <div className="wish1" > hello </div> */}
            </div>
        )
    }
}
  
export default App;