import React from "react";
import "./Nav.css";
class Navi extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            first:"home",
            second:"about",
            third:"service",
            fourth:"profile"
        }
    }
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
           <a href="#" className="navbar-brand">Website</a>
                <button  className="navbar-toggler" data-toggle="collapse" data-target="#ishan"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="ishan">

                <ul className="navbar-nav " >
                    <li className="nav-item active"><a href="#" className="nav-link">{this.state.first} </a></li>
                    <li className="nav-item"><a href="#" className="nav-link">{this.state.second} </a></li>
                    <li className="nav-item"><a href="#" className="nav-link">{this.state.third} </a></li>
                    <li className="nav-item"><a href="#" className="nav-link disabled">{this.state.fourth} </a></li>

                </ul>
              </div>
            </nav>
            </>
        );
    }
}
export default Navi;