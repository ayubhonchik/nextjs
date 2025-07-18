"use client" // CSR
import React, { useState } from 'react'

const Hero = () => {
  const [count, setCount] =  useState(0)
  console.log("haa");
  
  return (
    <div>
        <h2>Hero {count}</h2>
        <button onClick={()=> setCount(count + 1)}>increment</button>
    </div>
  )
}

export default Hero