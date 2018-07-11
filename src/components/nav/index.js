import React from 'react';
import NavContainer from './nav_container';
import { NavLink } from 'react-router-dom';

export default props => {
    return(
        <NavContainer>
            <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/secret-list">Secret List</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/movie-quote">Movie Quote</NavLink>
            </li>



        </NavContainer>
    );
}