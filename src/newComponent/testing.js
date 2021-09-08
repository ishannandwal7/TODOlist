import React,{useEffect,useState} from 'react';
import $ from "jquery";

const Testing = () => {
    const [state, setstate] = useState("testing");
    const ishan=()=>{
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=indore&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "cbc09da551mshabef0758e18b536p12f19cjsned97db08a990"
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.log(response);
            setstate(response);
        });
    }
    return (
        <>
       
        {/* <button className="btn btn-primary"onClick={ishan} >click me </button>
        <h1>the data is:{state} </h1> */}
        </>
    )
}

export default Testing;
