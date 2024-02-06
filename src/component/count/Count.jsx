import React, { useState, useEffect } from 'react'

const Count = () => {
    const [myCount, setMyCount] =useState(0);
    const [isSubmite, setIsSubmited] = useState(false);

    useEffect (() =>{
        console.log("Render in useEffect")
        setMyCount(myCount+1)
    },[isSubmite])

    const submitHandler = ()=> {
        setIsSubmited(!isSubmite)
    }

  return (
    <div>Count{myCount}
        <button type='button' onClick={submitHandler}>Count</button>
    </div>
  )
}

export default Count