import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Project from './Project'
import Layout from '../components/Layout'
const MainRouter = () => {
  return (
    <div>
      <Layout/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default MainRouter