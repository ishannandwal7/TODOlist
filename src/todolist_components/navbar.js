import React from 'react'
import Card from "../restaurant_components/Card";
import ReactDOM from 'react-dom';
import Home from "../restaurant_components/Home";


const Navbar = () => {
    const res=()=>{
        ReactDOM.render(
            <React.StrictMode>
              <Home />
            </React.StrictMode>,
            document.getElementById('root')
          );
    }
    return (
        <>
      

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a href="#" className="nav-brand">TODO</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#ishan"><i class="fa fa-bars" aria-hidden="true"></i>
</button>
                <div className="collapse navbar-collapse" id="ishan">
                    
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">about</a></li>
                    <li className="nav-item"><a href="#" onClick={res} className="nav-link">restaurant</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">profile</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
