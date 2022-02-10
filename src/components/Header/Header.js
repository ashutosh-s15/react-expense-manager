import React, { Fragment } from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
            <div className={classes.header}>
                <div className={classes.container}>
                    <span className={classes.title}>EXPENSE TRACKER</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Header;