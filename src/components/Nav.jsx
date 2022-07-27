import React from 'react';
import "../styles/Nav.css"

const Nav = () => {
    return (
        <nav className='Navigation'>
            <div className="row">
            <div className="nav__Wrapper">
                <h1>LAKBAY</h1>
                <ul className='nav__items'>
                    <li className='Home'>Home</li>
                    <li>About</li>
                    <li>Newsletter</li>
                </ul>
            </div>
            </div>
           
        </nav>
    );
}

export default Nav;
