import React from 'react'
import "./Navbar.modules.css"
import { Link, NavLink } from 'react-router-dom'


export default class Navbar extends React.Component {
  constructor(){
    super()

    this.state = {
      padding:'py-5'
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', (event) => {
      if(window.scrollY > 50){
        this.setState({padding:'py-2'})
      }
      else{
        this.setState({padding:'py-5'})
      }
    })
  }


  render() {
    return <>
<nav className={`navbar navbar-expand-lg smooth position-sticky top-0 left-0 right-0 ${this.state.padding} navbar-light `}>
  <Link className="navbar-brand text-light fs-2 fw-bold" to={"smartframework"}>START FRAMEWORK</Link>

  <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto ">
      <li class="nav-item ">
        <NavLink className={({isActive}) => isActive==true? "nav-link nav-active-link mx-3 text-light fw-bold fs-5 rounded-2 p-2" : "nav-link mx-3 text-light fw-bold fs-5 rounded-2 p-2"} to={"about"}>About</NavLink>
      </li>
      <li class="nav-item ">
        <NavLink className={({isActive}) => isActive==true? "nav-link nav-active-link mx-3 text-light fw-bold fs-5 rounded-2 p-2" : "nav-link mx-3 text-light fw-bold fs-5 rounded-2 p-2"} to={"portfolio"}>Portfolio</NavLink>
      </li>
      <li class="nav-item ">
        <NavLink className={({isActive}) => isActive==true? "nav-link nav-active-link mx-3 text-light fw-bold fs-5 rounded-2 p-2" : "nav-link mx-3 text-light fw-bold fs-5 rounded-2 p-2"} to={"contact"}>Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  }
}

