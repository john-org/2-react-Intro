import React from "react"
import "../assets/css/AddPirateForm.css"

export default function Test() {
  // HERE
  const [steps, setSteps] = React.useState(0)

  // unlike our randomize function this needs to be part inside the component definition
  function increment() {
    setSteps((steps) => steps + 1)
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      {/* Note: not increment() */}
      <button onClick={increment}>I took another step</button>
    </div>
  )
}
