import React from 'react';
import classes from './Mainheader.module.css';
import {useHistory} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

function Mainheader() {
  const {logout}=useContext(AuthContext)
  return (
    <>
    <header className={classes.header}>
        <div className={classes.logo}><a href='#'>REACT HEADER</a></div>
        <nav>
            <ul>
                <li><a href="#">Login</a></li>
                <li><a href='#'>Profile</a></li>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </ul>
        </nav>
    </header>

    </>
  )
}

export default Mainheader