
import React from "react";

const Button = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
    <p>Button clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Button
