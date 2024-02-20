import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = ()=>{

    return (
        <>
        <div className="nav-box">
        <Link className="style" to='/'>
            Notes
        </Link>
        <Link className="style" to='/AgeCalc'>
            Age Calculator
        </Link>
        <Link className="style" to='/Search'>
            Search Img
        </Link>
        <Link className="style" to='/To'>
            ToDo List
        </Link>
        <Link className="style" to='/Qoutes'>
            GOT Qoutes
        </Link>
        <Link className="style" to='/Calculator'>
            Calculator
        </Link>
       
        </div>
       

        </>
    );
};

export default Nav;