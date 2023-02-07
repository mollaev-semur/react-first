import React, { useState } from "react";

function App() {
  console.log('Hi')
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }

  }

  return (
    <>
      <h2> Hello world </h2>
      <p> Respect to react: </p>
      <div> {count} </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App;
