import React from 'react'
const reducer=(state,action)=>{
if(action.type==="INCR"){
state++;
}
if(action.type==="DCR" && state>0){
    state--;
}
return state;
}

const Ishan = () => {
    const [state, dispatch] = React.useReducer(reducer, 0);
    return (
        <>
           <div className="container" id="iop">
               <h1 className="container-fluid">{state} </h1>
               <button className="btn btn-group">
                   <button className="btn btn-primary" onClick={()=>dispatch({type:"INCR"})}>INCR</button>
                   <button className="btn btn-primary" onClick={()=>dispatch({type:"DCR"})}>DCR</button>


               </button>
              
           </div>
        </>
    )
}

export default Ishan;
