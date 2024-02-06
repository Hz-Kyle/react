import React from 'react'
import Child1 from './Child1'

const Parent = () => {
    const loginUser="Admin"
  return (
    <div>
        <h2>Parent</h2>
         <p>{loginUser}</p>
         <Child1 loginUser={loginUser}/>
    </div>
  )
}

export default Parent