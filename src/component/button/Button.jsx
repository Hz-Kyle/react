import React , { useState}from 'react'
import'./Button.css'



const MyButton= ({btnClassName,btnLabel,onbtnClick,dis})=> {
    return(
       <button className={`btn ${btnClassName}`} onClick={onbtnClick} disabled={dis}>{btnLabel}</button>
    )
    
}

const Button = () => {
    const[count,setCount] = useState(0);
   
    const decreaseHandler = () => {
      if (count === 0){
          setCount(0)
      }
      else{
        setCount(count-1)
      }
    }
    
  return (
    <div>
        <p>My Count{count}</p>
        <MyButton btnClassName = "increase" btnLabel="Increment" onbtnClick={()=>setCount(count+1)}/>
{
  count === 0 ? <MyButton btnClassName = "decrease" btnLabel="Decrement" onbtnClick={decreaseHandler} dis={true}/> : 

        <MyButton btnClassName = "decrease" btnLabel="Decrement" onbtnClick={decreaseHandler}/>
}
        
    </div>

  )
}

export default Button