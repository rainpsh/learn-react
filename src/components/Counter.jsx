import React, { useState } from 'react'

function Counter() {
  // logic
  //let count = 0;
  // state
  const [count, setCount] = useState(0)
  const MAX = 10
  const MIN = 0

 
  const handleIncrease = ( ) => {
 //   count += 1;
    if(count >= MAX) return
    setCount(count + 1)
  }
   // console.log("🚀 ~ handleIncrease ~ count:", count)
  
   const handleDecrease = () => {
  //   setCount(count - 1) 
   // if(count <= MIN) return
   // setCount((prev) => prev -1 )
    setCount((prev) => count <= MIN ? count : prev -1 )
    
  }
 

  // view
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button type="button" onClick={handleIncrease} > +1
        </button>
        <button type="button" onClick={handleDecrease}> -1
        </button>
      </div>
    </div>
  )
}

export default Counter