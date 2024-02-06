import React, { useState } from 'react'
import './Homework.css'

const Homework = () => {
  const [inputText , setInputText] = useState("");
  const [todoItems , setTOdoItems] = useState([]);

  const inputHandler = (e) => {
    setInputText(e.target.value) 
  }

  const addHandler = ()=> {
    console.log("Added value"+ inputText)
    if(inputText !== ""){
      setTOdoItems ([...todoItems , inputText] );
      setInputText("");
    }
  }

  const editHandler = (clickedId) => {
    console.log("Edit index" + clickedId)
    const oldItem = todoItems.filter((item, index) => index=== clickedId)
    const newText=window.prompt('Edit your text', oldItem)
    
    if(newText){
      console.log("New tect" + newText)
      const updateTodoItems = todoItems.map((item, index)=> 
      index === clickedId ? newText : item)
      console.log("Update todo items" + updateTodoItems)
      setTOdoItems (updateTodoItems)
    }
  }

  const deleteHandler = (clickedId) => {
    console.log("dlete" + clickedId)
    const updateTodoItems = todoItems.filter((item, index) => index !== clickedId)
    setTOdoItems(updateTodoItems)
  }

  return (
    <div className="box">
      <h1>TODO LIST</h1>
      <hr />

      <div className='txtbox'>
        <input className='txtbox-txt' placeholder='add item...' value={inputText} onChange={inputHandler}/> <br />
        <button className='hbtn' type="button" onClick={addHandler}>Add</button>
      </div>

      <div className='testbox'>
        
     {
       todoItems.map((item, index) =>  
       <div className='testbox-box' key={index}>
       <p>{item}</p>
         <div className='testbox-btn'>
           <button type='button' onClick={()=>editHandler(index)} >Edit</button>
           <button type='button' onClick={()=>deleteHandler(index)}> Delete</button>
         </div>
   </div> 
    ) }

      </div>
    </div>
  )
}

export default Homework