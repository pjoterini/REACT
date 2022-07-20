import React, { useState, createContext } from "react"
import { createRoot } from "react-dom/client"

import Sidebar from "./components/Sidebar"
import MainArea from "./components/MainArea"
import Footer from "./components/Footer"
import OurContext from "../../05-context/src/OurContext"

import OurContext from "../../05-context/src/OurContext"

function App() {
  const [size, setSize] = useState(25)
  const [color, setColor] = useState("skyblue")
  const [likeCount, setLikeCount] = useState(0)

  return (
    <OurContext.Provider value={{color, setColor, size, setSize, likeCount, setLikeCount}}>
    <div className="grid-parent">
      <div className="header">
        <h1>Welcome To Our App</h1>
        <p>The current size is {size} and the current color is {color}.</p>
        <p>
          This page has been liked <strong>{likeCount}</strong> times.
        </p>
      </div>
      <Sidebar />
      <MainArea color={color} size={size}/>
      <Footer setSize={setSize} likeCount={likeCount} setLikeCount={setLikeCount}/>
    </div>
    </OurContext.Provider>
  )
}

const root = createRoot(document.querySelector("#app"))
root.render(<App />)
