import React, { Component } from 'react'
import "./Footer.modules.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
  render() {
    return <>
    {/* */}
    <footer className='mb-0 '>
        <div className="footer-details">
          <div className="container">
            <div className="row gy-5">
                <div className="col-sm-12 col-md-4 ">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-light">LOCATION</h3>
                        <p className="text-light">2215 John Daniel Drive</p>
                        <p className="text-light">Clark, MO 65243</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-light">AROUND THE WEB</h3>
                        <div className="d-flex icon-container ">
                            <div className="mx-1 d-flex justify-content-center align-items-center"><FontAwesomeIcon className="fa fa-brands fa-facebook"></FontAwesomeIcon></div>
                            <div className="mx-1 d-flex justify-content-center align-items-center"><i className="fa-brands fa-twitter"></i></div>
                            <div className="mx-1 d-flex justify-content-center align-items-center"><i className="fa-brands fa-linkedin"></i></div>
                            <div className="mx-1 d-flex justify-content-center align-items-center"><i className="fa-solid fa-globe"></i></div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-4">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3 className="text-light">ABOUT FREELANCER</h3>
                        <p className="text-light text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="copy-right py-4">
            <p className="text-light text-center">Copyright © Your Website 2021</p>
        </div>
    </footer>
    </>
    }
}
