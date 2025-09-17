import React from 'react'
import Logical from '../components/Logical';
import Greeting from './../components/Greeting';
import { Card } from './../components/Card';
import Counter from './../components/Counter';
import Move from '../components/Move';

const Home = () => {  
  const handleIncrease = () => {
    console.log("➕ 더하기 버튼 클릭!!")
  }
  return (
    <div className="App">
      Home
      {/* 페이지 이동 버튼 */}
      <Move />

      <Logical />
      <Greeting username="박성혜"/>
      <Greeting username="별지기"/>
      <Greeting username="날마다"/>
      <Card />
      {/* 숫자가 5씩 증가하는 Counter 컴포넌트 만들기*/}
      <Counter  step={5} onIncreaseClick={handleIncrease} />
      <Counter onIncreaseClick={handleIncrease}/>
    </div>
  );
}

export default Home