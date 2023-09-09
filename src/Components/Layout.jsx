import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router'

export default class Layout extends Component {
  render() {
    return <>
        <Navbar/>

        <Outlet/>

        <Footer/>
    </>
  }
}
