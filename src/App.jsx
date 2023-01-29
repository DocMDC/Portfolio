import React from 'react'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import {Routes, Route} from "../node_modules/react-router-dom"

export default function App () {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

