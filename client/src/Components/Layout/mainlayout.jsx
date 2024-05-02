import React from 'react'
import Header from './Header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
function mainlayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default mainlayout
