import React, { useState, useEffect } from "react";
import "./Mo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Button Texts as JSX
const buttonTexts = {
  1: (
    <>
      <h1 className="fs-5 btn-text m-0">Free Registration</h1>
      <span> Short and simple - sign <br /> up in seconds!</span>
    </>
  ),
  2: (
    <>
      <h1 className="fs-5 btn-text m-0">List a Product</h1>
      <span> Press the add sign to list<br /> your products on MO.</span>
    </>
  ),
  3: (
    <>
      <h1 className="fs-5 btn-text m-0">Buy a Product</h1>
      <span> Browse and buy <br /> seamlessly with In-App<br /> Pay and MO Delivery.</span>
    </>
  ),
  4: (
    <>
      <h1 className="fs-5 btn-text m-0">Chat with Seller</h1>
      <span> MO Chat allows you to<br /> ask questions, negotiate,<br /> and finalize purchases.</span>
    </>
  ),
  5: (
    <>
      <h1 className="fs-5 btn-text m-0">More Questions</h1>
      <span> Check our FAQs. Contact<br /> support for MOre help.</span>
    </>
  ),
  6: (
    <>
      <h1 className="fs-5 btn-text m-0">MO Stories</h1>
      <h1>hosting</h1>
      <span> Get seen with MO Stories,<br /> boost sales, and reach<br /> more buyers!</span>
    </>
  ),
};

// ✅ Images Object
const images = {
  1: "/images/step-1.png",
  2: "/images/step-2.png",
  3: "/images/step-3.png",
  4: "/images/step-4.png",
  5: "/images/step-5.png",
  6: "/images/step-6.png",
};

function Phonedisplaybuttons() {
  const [selectedButton, setSelectedButton] = useState(1);
  const [displayImage, setDisplayImage] = useState(images[1]);

  useEffect(() => {
    setDisplayImage(images[selectedButton]);
  }, [selectedButton]);

  const handleClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    
    <div className="container-fluid phndispl mt-5">
       <img src="/images/redframe.png" alt="redframe" className="redframe" ></img>
      <div className="row h-100">
        {/* Right Side: Phone Display */}
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center order-md-last p-2">
          <div className="phone-display bg-light" style={{ width: "180px", height: "365px" }}>
            <img src={displayImage} alt="Phone Display" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* Left Side: Buttons */}
        <div className="col-12 col-md-8 d-flex flex-column justify-content-center order-1 order-md-first">
          <div className="row d-flex flex-row flex-wrap justify-content-start m-5 text-white">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div className="col-2 col-md-6 p-2 align-items-center d-flex text-start" key={num}>
                <button
                  type="button"
                  className={`btn btn-sm fs-4 ${selectedButton === num ? "btn-warning" : "btn-danger"}`}
                  onClick={() => handleClick(num)}
                >
                  {num}
                </button>
                {/* ✅ Show text only based on screen size */}
                <span className={`ms-3 btn-text ${selectedButton === num ? "visible-text" : "hidden-text"}`}>
                  {buttonTexts[num]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phonedisplaybuttons;
