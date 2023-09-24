import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn : false,
    login : (token,email)=>{},
    logout : ()=>{}
})

export const AuthContextProvider = (props)=>{
    const history = useHistory()
    const initalToken = localStorage.getItem('token')
    const [token,setToken]=useState(initalToken);
    const userIsLoggedIn = token ? true : false;

    const loginHandler =(token,email)=>{
        localStorage.setItem('token',token)
        setToken(token);
    }
    const logoutHandler = ()=>{
        localStorage.clear();
        history.replace('/auth');
        setToken(null);
    }

    const contextValue ={
        token : token,
        isLoggedIn : userIsLoggedIn,
        login : loginHandler,
        logout : logoutHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext