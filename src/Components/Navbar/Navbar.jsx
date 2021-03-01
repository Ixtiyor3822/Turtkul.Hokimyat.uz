import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed ">
            <div className="container-fluid">
                <div className="sayt-navbar">
                    <a href="/" className="nav-link">
                        <h2>Hokimyat rasmiy sayti</h2></a>
                    <NavLink to='/arizaberish' className="nav-link active">
                        Ariza berish
                    </NavLink>
                    <NavLink to='/arizalarim' className="nav-link">
                        Mening arizalarim
                    </NavLink>
                </div>
                <NavLink to="/myprofile" className="nav-link">
                    My Profile
            </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;