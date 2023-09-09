import React, { Component } from 'react'
import "./Contact.modules.css"

export default class Contact extends Component {

  render() {
    return <>
    <section className='contact-container'>
        <div className="container">
            <h2 className="text-center fw-bold contact-component">CONTACT COMPONENT</h2>

            <div className="d-flex justify-content-center mt-4 ">
                  <div className="contact-bars mx-2"></div>
                  <i class="fa-solid fa-star"></i>
                  <div className="contact-bars mx-2"></div>
            </div>

            <form method="post" className='d-flex flex-column align-items-center mt-2'>
              <div className="d-flex flex-column align-items-center w-50 " >
                <input type="text" className='contact-form-inputs w-100 rounded-2 ' placeholder='userName' id='userName'/>
                <input type="number" className='contact-form-inputs w-100 rounded-2 ' placeholder='userAge'/>
                <input type="email" className='contact-form-inputs w-100 rounded-2 ' placeholder='userEmail'/>
                <input type="password" className='contact-form-inputs w-100 rounded-2 ' placeholder='userPassword'/>
              </div>

              <div className="w-50 ">
                  <button className='contact-send-message p-2 rounded-2 text-light'>Send Message</button>
              </div>
            </form>
        </div>
    </section>
    </>
  }
}
