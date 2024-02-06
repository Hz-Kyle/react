import React from 'react'
import Child2 from './Child2'

const Child1 = ({loginUser}) => {
  return (
    <div>
      Child1 {loginUser}
      <Child2 loginUser={loginUser}/>
    </div>
  )
}

export default Child1