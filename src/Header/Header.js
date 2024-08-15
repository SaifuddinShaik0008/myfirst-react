import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./images.png"



const Header = () => {
    return (
        <div>
            <div className="container-fluid p-2 bg-success mail">
                <a href=''><i class="bi bi-envelope-at p-2 ms-2">info@gmail.com</i></a>
                <a href="#"><i class="bi bi-telephone p-2 ms-2">6465465441</i></a>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light header ">
                <div className="container-fluid p-0">
                    <NavLink className="navbar-brand" href="#">
                        <img className='w-25 ps-2' src={logo} alt='ghj'/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Treatment">Treatment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Appointment">Appointment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                            
                            
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header