import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className="top-nav">
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo">
                            <h1>HeadPhonesValley</h1>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end align-items-center">
                        <div className="nav-link">
                            <NavLink className={({ isActive }) => isActive ? "link-active" : "link"} to="/">Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "link-active" : "link"} to="/review">Review</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "link-active" : "link"} to="/dashboard">Dashboard</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "link-active" : "link"} to="/blog">Blog</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;