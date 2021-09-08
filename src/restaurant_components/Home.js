import React from 'react'
import Card from './Card'
import Navi from './Navi'
import Menu from '../Menu';
import Test from './Test';
import Ishan from "./Ishan";



const Home = () => {
    // const [menudata, setmenudata] = React.useState(Menu);
    // var time=0;
    // const ishan=()=>{
    //     console.log("correct");
    //      var today = new Date();
    //      time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //     // return <h1>{time} : current time</h1>
    //     time="you messed up somewhere";

    // }
    return (
        <>
            <Navi />
            {/* <Ishan/> */}
            <Test/>
            {/* <Card menudata={menudata} /> */}

        </>
    )
}

export default Home;
