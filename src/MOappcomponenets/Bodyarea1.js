import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mo.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Bodyarea1() {
  const [activeTab, setActiveTab] = useState(1);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling get start button
    });
  };






  return (
    <div className="container-fluid mb-2 w-100 p-2 ">
      <div className="row">

        <div className="col-12 col-md-6  d-flex  p-2  align-items-center ">
          <div class="rectangle justify-content-end d-flex" >
            <img src="/images/strep-3.png" alt="phnedis" className="imgright" ></img>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-5">
          <span className="text-muted text-center text-md-start">
            <h3><img src="/images/logosmall.png" alt="logosmall" className="img-fluid" width="50px" /> MarketPlace</h3>
          </span>
          <div className="display-2 fw-bold text-center text-md-start">
            <span className="text-danger text-md-start text-center mb-2">How it works</span>
            <br />

            <div className="  text-md-start ">
              <div className="text-black  text-md-start ">
                <span className="font-responsive  responsive-text">Buyers and<span className="desktop-break"><br /></span> Sellers<span className="desktop-break"><br /></span>
                  Have one profile
                </span>

              </div>

            </div>

          </div>

          <div className="container-fluid">
            <div className="row mt-4 ">
              <div className="col-6 col-md-6   text-center">
                <h4
                  className={activeTab === 1 ? 'text-danger' : 'text-black'}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 2, // Ensure the heading text stays above the lines
                  }}
                  onClick={() => setActiveTab(1)} // Set activeTab to 1
                >
                  <span className="font-responsive" style={{ fontSize: '30px' }}>HOW DO I SELL?</span>
                </h4>
              </div>

              <div className="col-6 col-md-6   text-center">
                <h4
                  className={activeTab === 2 ? 'text-danger' : 'text-black'}
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    zIndex: 2, // Ensure the heading text stays above the lines
                  }}
                  onClick={() => setActiveTab(2)} // Set activeTab to 2
                >
                  <span className="font-responsive" style={{ fontSize: '30px' }}>HOW DO I BUY? </span>
                </h4>
              </div>

              {/* Line Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '2px', // Set height to 4px for a seamless black line
                  backgroundColor: 'black', // Black line across both headings
                }}
              >
                {/* Red Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: activeTab === 1 ? '0' : '50%', // Red line is on the left for Heading One, right for Heading Two
                    width: '50%', // Red line should span half the width of the container
                    height: '2px',
                    backgroundColor: 'red', // Red line for the active tab
                  }}
                ></div>

              </div>
            </div>


            <div className="row mt-4">
              <div className="col-12">
                {activeTab === 1 &&
                  <span className="fs-6 fs-md-4 fs-lg-2">
                    <ul className="list-group my-custom-list">
                      <li >
                        <span >
                          LIST FOR FREE</span><br />
                        Download the FREE MO Marketplace App.
                        Snap a photo, price it and list it in less than 60 seconds right from your phone!
                      </li>

                      <li >
                        <span >
                          SELL IT</span><br />
                        Use MO chat to negotiate with Buyers.
                        Once you agree to a price and accept an offer,
                        get your items ready for collection by MO delivery.

                      </li>
                      <li >
                        <span >
                          EARN CASH<br />
                        </span>
                        Shipping is easy with in-app payment and MO Delivery.
                        Funds deposited to your account, 24hrs after delivery.
                        Prefer to handle the transaction on your own? You can do that too with MO!
                      </li>

                    </ul>
                  </span>}
              </div>
              {activeTab === 2 &&
                <span className="fs-6 fs-md-4 fs-lg-2">
                  <ul className="list-group my-custom-list">
                    <li >
                      <span  >SCORE DEAL</span><br />
                      Explore a range of products from multiple Sellers and negotiate price of MO Chat.
                    </li>
                    <li>
                      <span >GRAB IT</span><br />
                      Like an Item? Simply add to cart and have MO Delivery
                      deliver the item straight to your door step wihtin 2/3 Business Days.
                    </li>
                    <li clas>
                      <span >GET IT</span><br />
                      Once you check out, funds will only be sent to Seller 24hrs after receiving the item,
                      just so we know everything is okay.
                      Alternatively arrange delivery and payment with seller on your own terms.
                    </li>
                  </ul>
                </span>}
            </div>
          </div>

          <div >
            <div class=" justify-content-center text-center ">
              <img src="/images/logosmall.png" alt="logosmall" className="img-fluid" width="50px" /><span class="fs-6 fs-md-4 fs-lg-2">
                re Questions? FAQ
              </span>
            </div>'
            <div class="justify-content-center text-center" >

              <button
                onClick={handleScrollToTop}
                className="btn btn-light rounded-pill   border-danger btn-sm btn-md-lg"
                style={{
                  backgroundColor: "red", // Light red background
                  color: "white",// Light red border
                  // Ensures the button has a consistent width

                }}
              >
                Get Started
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>



  );
}

export default Bodyarea1;
