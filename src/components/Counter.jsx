import React, { useState } from 'react'

function Counter({step = 1, onIncreaseClick }) {
  // logic
  //let count = 0;
  // state

  // 첫번째 변수는 데이터, 두번째 변수는 함수
  const [count, setCount] = useState(0)
  const MAX = 100
  const MIN = 0
  
 
  const handleIncrease = ( ) => {
 //   count += 1;
    if(count >= MAX) return
    setCount(count + step)

    onIncreaseClick()
  }
   // console.log("🚀 ~ handleIncrease ~ count:", count)
  
   const handleDecrease = () => {
  //   setCount(count - 1) 
   // if(count <= MIN) return
   // setCount((prev) => prev -1 )
    setCount((prev) => count <= MIN ? count : prev - step )
    
  }
 

  // view
  return (
    <div>
      <h1>카운터</h1>
      <h2>{count}</h2>
      <div>
        <button type="button" onClick={handleIncrease} > + {step}
        </button>
        <button type="button" onClick={handleDecrease}> - {step}
        </button>
      </div>
    </div>
  )
}

export default Counter