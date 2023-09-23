import React, { useRef, useState } from 'react';
import classes from './AuthForm.module.css';

function AuthForm() {
    const inputMailRef = useRef()
    const inputPassRef = useRef()
    const [isLoading, setIsLoading]=useState(false)
    const [isLogin, setIsLogin]= useState(false)
    const submitHandler = (event)=>{
        event.preventDefault();
        const enteredMail = inputMailRef.current.value;
        const enteredPass = inputPassRef.current.value;

    }
  return (
    <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
        <div className={classes.control}> 
            <label htmlFor="">Your Email</label>
            <input type="mail" ref={inputMailRef} required />
        </div>
        <div className={classes.control}> 
            <label htmlFor="">Your Password</label>
            <input type="password"ref={inputPassRef} minLength='7' required />
        </div>
        <div className={classes.actions}> 
            {!isLoading && <button>{isLogin ? "Login": "Create Account"}</button>}
            <button type='button' className={classes.toggle}>{isLogin ? "Create new account" : "Log in with existing account"}</button>
        </div>
        </form>
    </section>
  )
}

export default AuthForm