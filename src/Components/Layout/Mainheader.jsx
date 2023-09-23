import React from 'react';
import classes from './Mainheader.module.css';

function Mainheader() {
  return (
    <>
    <header className={classes.header}>
        <div className={classes.logo}><a href='#'>REACT HEADER</a></div>
        <nav>
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href='#'>Profile</a></li>
                <li>
                    <button>Logout</button>
                </li>
            </ul>
        </nav>
    </header>

    </>
  )
}

export default Mainheader