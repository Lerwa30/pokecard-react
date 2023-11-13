import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={classes.header}>
                <h2>PokeCard Finder</h2>
            </div>
        </header>
    )
};

export default Header;