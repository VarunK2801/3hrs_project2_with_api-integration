import React, { useState } from "react"
import { Switch,Route } from "react-router-dom";
import Form from "./Components/Form/Form"
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import AuthForm from "./Components/Auth/AuthForm";

function App() {
  const [isValid , setIsValid]=useState(false);

  const showCartHanlder = ()=>{
    setIsValid(true)
  }
  const hideCartHandler = ()=>{
    setIsValid(false)
  }

  return (
    <Layout>
        <Switch>
          <Route path="/auth">
            <AuthForm />
          </Route>
          <Route path='/'>
            <Form onShow={showCartHanlder} /> 
          </Route>
          {isValid && <Cart onClose = {hideCartHandler}/>}
        </Switch>
    </Layout>
  )
}

export default App
