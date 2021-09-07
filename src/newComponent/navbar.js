import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a href="#" className="nav-brand">TODO</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#ishan"><span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="ishan">
                    
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="#" className="nav-link">home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">about</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">service</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">profile</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
