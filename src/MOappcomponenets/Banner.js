import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mo.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)
import Navebar from './Navebar';

//import Navitems from './MOappcomponenets/Navitems.js';

function Banner() {
  return (
    <div className="container-fluid w-100">
      <div className='row'>
        <div className="   col-12 col-md-6  fs-6 fs-md-4 fs-lg-2">
          <Navebar />
          <div className=" text-left mt-4 p-4 fs-6 fs-md-4 fs-lg-2"  >
            <div className="text-muted mb-3 ">
              <h4>Join Now!</h4>
            </div>
            <div className="text-muted mb-2 " >
              <h4>Discover MO</h4>
            </div>
            <div className="display-2 fw-bold ">
              Connect, Buy. Sell.<br />

              <span className="text-danger" style={{ marginBottom: '5px' }}>ALL IN ONE</span> <br />
              Marketplace.
            </div>


            <img src="/images/Badge1.png" alt="Badge 1" width="150px" className="img-fluid mt-5 me-2" />
            <img src="/images/Badge2.png" alt="Badge" width="150px" className="img-fluid mt-5" />

          </div>
        </div>


        <div className="  col-12  col-md-6 col-sm-6 fs-6 fs-md-4 fs-lg-2 ">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            {/* Dot Indicators */}
            <div className="carousel-indicators col-12 col-md-6 col-sm-6">
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* Carousel Inner */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/crslimg1.png" alt="image1" className=" d-block w-100 img-fluid" />

              </div>
              <div className="carousel-item">
                <img src="/images/crslimg2.png" alt="image3" className=" d-block w-100 img-fluid" />

              </div>
              <div className="carousel-item">
                <img src="/images/crslimg3.png" alt="image3" className=" d-block w-100 img-fluid" />

              </div>
            </div>

            {/* Navigation Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>


    </div>








  );
}

export default Banner;
