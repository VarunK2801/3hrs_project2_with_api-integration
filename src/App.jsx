import React, { useState } from "react"
import Form from "./Components/Form/Form"
import Cart from "./Components/Cart/Cart";

function App() {
  const [isValid , setIsValid]=useState(false);

  const showCartHanlder = ()=>{
    setIsValid(true)
  }
  const hideCartHandler = ()=>{
    setIsValid(false)
  }

  return (
    <>
    <h1>varun</h1>
    <Form onShow={showCartHanlder} /> 
    {isValid && <Cart onClose = {hideCartHandler}/>}
    </>
  )
}

export default App
