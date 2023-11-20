import React from "react";
import { Link } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={classes.header}>
                <h2>PokeCard Finder</h2>
                <Link to='/'>
                <a>Home</a>
                </Link>
            </div>
        </header>
    )
};

export default Header;