import React, { Component } from 'react'
import "./SmartFramework.modules.css"
import image4 from "../../Images/avataaars.svg"

export default class SmartFramework extends Component {
  render() {
    return <>
    <section className='smartFramework-container'>
        <div className="container">
           <div className="d-flex justify-content-center mb-5">
             <div className="w-25 d-flex justify-content-center ">
               <img src={image4} alt="happy face" className='w-75'/>
             </div>
           </div>

            <h2 className="text-center fw-bold text-light smartFramework-component">SMART FRAMEWORK</h2>

            <div className="d-flex justify-content-center mt-4">
                  <div className="smartFramework-bars mx-2"></div>
                  <i class="fa-solid fa-star"></i>
                  <div className="smartFramework-bars mx-2"></div>
            </div>

           <div className="mt-2">
            <p className="text-light text-center">Graphic Artist - Web Designer - Illustrator</p>
           </div>
        </div>
    </section>
    </>
  }
}
