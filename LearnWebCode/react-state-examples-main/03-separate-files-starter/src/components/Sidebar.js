import React from "react"
import OurContext from "../../../05-context/src/OurContext"

function Sidebar() {
  const state = React.useContext(OurContext)

  return (
    <div className="sidebar">
      <input type="text" value={state.size} onChange={e => state.setSize(e.target.value)}/>
      <input type="text" value={state.color} onChange={e => state.setColor(e.target.value)}/>
      <button onClick={handleButton}>Make the text 20px and pink</button>
    </div>
  )

  function handleButton() {
    state.setSize(20)
    state.setColor('pink')
  }
}



export default Sidebar
