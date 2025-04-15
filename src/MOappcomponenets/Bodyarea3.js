import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mo.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Bodyarea3() {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 col-md-8 p-5 fs-3 text-center text-md-start">
                    <h2 className='responsive-text mb-3 ' > what we have</h2>
                    <div className='display-4 display-md-2 font-bold text-center fw-semibold text-md-start'>
                        Valued Sellers...
                    </div>
                </div>

                <div className="col-12 col-md-4 p-5">
                    <span className="text-muted text-center   ">
                        <h3><img src="/images/logosmall.png" alt="logosmall" className="img-fluid" width="50px" /> MarketPlace</h3>
                    </span>
                    <div className="d-flex  flex-wrap align-items-center position-relative">
                        {/* Left Side: "What" and Image */}
                        <span className="display-4 mt-3">What</span>
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="img-fluid mx-2 align-self-cente mt-4 "
                            style={{ maxWidth: '80px', height: 'auto' }}
                        />

                        {/* Right Side: "We" (above) and "re Do.." (below) */}
                        <div className="d-flex  align-item-center flex-wrap d-md-flex flex-column position-absolute" style={{ right: -50, top: -15 }}>
                            <span className="display-5 mt-2">We</span>
                            <span className="display-6 mt-auto">re Do..</span>
                        </div>
                    </div>

                    <div className='col-12'>
                        <ul className="list-group p-5 ">
                            <li class="list-group-item d-flex align-item-center"> <img src="/images/smallicons/smallicon1.png" alt="logosmall" className="img-fluid me-2"  /> List in 60 seconds</li>
                            <li class="list-group-item d-flex  align-item-center"> <img src="/images/smallicons/smallicon2.png" alt="logosmall" className="img-fluid me-2 "  /> island wide delivery</li>
                            <li class="list-group-item d-flex  align-item-center"> <img src="/images/smallicons/smallicon3.png" alt="logosmall" className="img-fluid me-2 " /> Follow friends</li>
                            <li class="list-group-item d-flex  align-item-center"> <img src="/images/smallicons/smallicon4.png" alt="logosmall" className="img-fluid me-2"  /> Secure transactions</li>
                            <li class="list-group-item d-flex  align-item-center"> <img src="/images/smallicons/smallicon5.png" alt="logosmall" className="img-fluid me-2"  /> In-app chat for privacy</li>
                            <li class="list-group-item d-flex  align-item-center"> <img src="/images/smallicons/smallicon6.png" alt="logosmall" className="img-fluid me-2"  /> Buy and sell with or without MO</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bodyarea3;