import React, { Component } from 'react'
import "./Portfolio.modules.css"
import image1 from  "../../Images/Smart Framework 1.png"
import image2 from  "../../Images/Smart Framework 2.png"
import image3 from  "../../Images/Smart Framework 3.png"

export default class Portfolio extends Component {

    display = (imageURL) => {
        this.show();

        if (imageURL == 1) {
            if(document.getElementById("displayImage2").classList.contains("d-block") || document.getElementById("displayImage3").classList.contains("d-block")){
                document.getElementById("displayImage2").classList.replace("d-block" , "d-none");
                document.getElementById("displayImage3").classList.replace("d-block" , "d-none");
            }

            document.getElementById("displayImage1").classList.replace("d-none" , "d-block");
        }

        else if (imageURL == 2) {
            if(document.getElementById("displayImage1").classList.contains("d-block") || document.getElementById("displayImage3").classList.contains("d-block")){
                document.getElementById("displayImage1").classList.replace("d-block" , "d-none");
                document.getElementById("displayImage3").classList.replace("d-block" , "d-none");
            }

            document.getElementById("displayImage2").classList.replace("d-none" , "d-block");
        }

        else{
            if(document.getElementById("displayImage2").classList.contains("d-block") || document.getElementById("displayImage1").classList.contains("d-block")){
                document.getElementById("displayImage2").classList.replace("d-block" , "d-none");
                document.getElementById("displayImage1").classList.replace("d-block" , "d-none");
            }

            document.getElementById("displayImage3").classList.replace("d-none" , "d-block");
        }
    }

    hide(){
        if(document.getElementById("displayCover").classList.contains("d-block")){
            document.getElementById("displayCover").classList.replace("d-block" , "d-none");
        }
    }

    show(){
        if(document.getElementById("displayCover").classList.contains("d-none")){
            document.getElementById("displayCover").classList.replace("d-none" , "d-block");
        }
    }

    render() {

    return <>
    <section className='portfolio-container'>
        <div className="container">
            <h2 className="text-center fw-bold portfolio-component">PORTFOLIO COMPONENT</h2>

            <div className="d-flex justify-content-center mt-4">
                <div className="portfolio-bars mx-2"></div>
                <i class="fa-solid fa-star"></i>
                <div className="portfolio-bars mx-2"></div>
            </div>

            <div className="row gy-3 mt-2">
                <div className="col-sm-12 col-md-6 col-lg-4 ">
                    <div className="position-relative portfolio-image-container " onClick={() => {this.display(1);}}>
                        <img src={image1} alt="house"  className='w-100 h-100 rounded-4' />
                        <div className="position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center rounded-4">
                            <h1 className='portfolio-plus text-light '>+</h1>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="position-relative portfolio-image-container " onClick={() => {this.display(2);}}>
                        <img src={image2} alt="food"  className='w-100 h-100 rounded-4' />
                        <div className="position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center rounded-4">
                            <h1 className='portfolio-plus text-light'>+</h1>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="position-relative portfolio-image-container " onClick={() => {this.display(3);}}>
                        <img src={image3} alt="tent"  className='w-100 h-100 rounded-4' />
                        <div className="position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center rounded-4">
                            <h1 className='portfolio-plus text-light'>+</h1>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="position-relative portfolio-image-container " onClick={() => {this.display(1);}}>
                        <img src={image1} alt="house"  className='w-100 h-100 rounded-4' />
                        <div className="position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center rounded-4">
                            <h1 className='portfolio-plus text-light'>+</h1>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="position-relative portfolio-image-container " onClick={() => {this.display(2);}}>
                        <img src={image2} alt="food"  className='w-100 h-100 rounded-4' />
                        <div className="position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center rounded-4">
                            <h1 className='portfolio-plus text-light'>+</h1>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="position-relative portfolio-image-container " onClick={() => {this.display(3);}}>
                        <img src={image3} alt="tent"  className='w-100 h-100 rounded-4' />
                        <div className="position-absolute start-0 end-0 bottom-0 top-0 d-flex justify-content-center align-items-center rounded-4">
                            <h1 className='portfolio-plus text-light'>+</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center display-cover d-none " id='displayCover' >
        <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center " onClick={() => {this.hide();}}>
            <div className='w-50 d-flex justify-content-center align-items-center' id="displayImageContainer">
            <img src={image1} alt='house' className='w-75 h-75 d-none ' id='displayImage1'/>

            <img src={image2} alt='food' className='w-75 h-75 d-none ' id='displayImage2'/>

            <img src={image3} alt='tent' className='w-75 h-75 d-none ' id='displayImage3'/>
            </div>
        </div>
    </div>
    </>

    }
}
