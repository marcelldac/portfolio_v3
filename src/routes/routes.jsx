import { Route, Routes } from "react-router-dom"

import Home from '../pages/Home';
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  )
}