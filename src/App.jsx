import React, { Component } from 'react'
import "./App.css"
import Layout from './Components/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import SmartFramework from './Components/SmartFramework/SmartFramework'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

let routes = createBrowserRouter([
  {path: '' , element: <Layout/> , children: [
       {path: '' , element: <About/>} ,
       {path: 'about' , element: <About/>} ,
       {path: 'portfolio' , element: <Portfolio/>} ,
       {path: 'contact' , element: <Contact/>} ,
       {path: 'smartframework' , element: <SmartFramework/>} ,
       {path: '*' , element: <NotFound/>} ,
  ]}
]);

export default class App extends Component {
  render() {
    return <>
        <RouterProvider router={routes}/>
    </>
  }
}
