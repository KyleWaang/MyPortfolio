import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Project from './Project'
import Layout from '../components/Layout'

import Signup from "./user/Signup.jsx";
import Signin from '../lib/Signin.jsx'

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

        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </div>
  )
}
export default MainRouter