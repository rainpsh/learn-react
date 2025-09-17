import React from 'react'

const Logical = () => {
  // logic
  // Logical operators
  // 1. and
  const user = {
    isLoggedin: true, // 로그인 여부
    role: "admin" // guest, user 사용자 롤
  }

  // 관리자페이지 접근 관리
  if(user.isLoggedin && user.role === "admin") {
    // true인 경우 실행코드
    console.log("❗관리자페이지에 접근 가능!")
  }else {
    console.log("❌관리자페이지에 접근 불가능!")
  }

  // 일반 사용자 페이지 접근 관리
  if(user.isLoggedin || user.role === "admin") {
    // true인 경우 실행코드
    console.log("❗사용자페이지에 접근 가능!")
  }else {
    console.log("❌사용자페이지에 접근 불가능!")
  }


  // 구조분해 할당 - 배열, 객체에서 각각의 값이나 속성을 분해하여 손쉽게 별도의 변수에 담아주는 것
  const colors = ["red", "blue"]
  //const firstColor = colors[0]
  //const secondColor = colors[1]
  
  const [firstColor, secondColor] = colors
  console.log("🚀 ~ Logical ~ firstColor:", firstColor)
  console.log("🚀 ~ Logical ~ secondColor:", secondColor)
  
  // 객체 구조분해할당
  const person = {
    name: "박성혜",
    mbti: "ENFJ"
  }
  // const {name, mbti} = person
  const {name: username, mbti} = person
  console.log("🚀 ~ Logical ~ name:", username)
  console.log("🚀 ~ Logical ~ mbti:", mbti)
  
  // spread syntax - 배열이나 객체를 개별요소로 분해하거나 결합할 때 사용
  const copyColors = ["yellow", ...colors ]
  console.log("🚀 ~ Logical ~ copyColors:", copyColors)
  console.log("🚀 ~ Logical ~ colors:", colors)
  
  const copyPerson = {...person, isAttendent: true, mbti: "ISTJ"}
  console.log("🚀 ~ Logical ~ copyPerson:", copyPerson)
  

  // view



  return (
    <div>Logical</div>
  )
}


export default Logical