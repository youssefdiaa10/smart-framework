import React, { Component } from 'react'
import "./About.modules.css"

export default class About extends Component {
  render() {
    return <>
    <section className='about-container'>
        <div className="container">
            <h2 className="text-light text-center fw-bold about-component">ABOUT COMPONENT</h2>

            <div className="d-flex justify-content-center mt-4">
                  <div className="about-bars mx-2"></div>
                  <i class="fa-solid fa-star text-light"></i>
                  <div className="about-bars mx-2"></div>
            </div>

            <div className="row gy-3 mt-2">
                <div className="col-sm-12 col-md-6">
                    <div className="">
                      <p className="text-light">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div >
                      <p className="text-light">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  }
}
