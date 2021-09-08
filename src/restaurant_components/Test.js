import React , {useEffect,useState} from 'react';

const Test = () => {
    let time=new Date().toLocaleTimeString();
    let op="ishan";
    const [mn, setmn] = React.useState(op);
    const [ctime, setctime] = React.useState(time);
    
    useEffect(() => {
      document.title=`time :(${ctime})`;
    })

    const ishan=()=>{
        time=new Date().toLocaleTimeString();
        setctime(time);
    }
    const changevalue=()=>{
        op=document.getElementById("jkl").value;
        setmn(op);
        console.log(op);

    }
   setInterval(ishan, 1000);
    return (
        <>
        <div className="container" id="iop">


           testing
        </div>
        </>
    )
}

export default Test
