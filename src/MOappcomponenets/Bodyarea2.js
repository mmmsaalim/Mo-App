import React, { useState, useEffect } from 'react';
import './Mo.css';

function Bodyarea2() {
    const images1 = [
        "/images/pinkcontainer/thumbnail-1.png",
        "/images/pinkcontainer/thumbnail-2.png",
        "/images/pinkcontainer/thumbnail-3.png",
        "/images/pinkcontainer/thumbnail-4.png"
    ];

    const images2 = [
        "/images/ratingimages/rating1.png",
        "/images/ratingimages/rating2.png",
        "/images/ratingimages/rating3.png",
        "/images/ratingimages/rating4.png",
         
    ];

    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    // First carousel auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [images1.length]);

    // Second carousel auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [images2.length]);

    // Functions for first carousel
    const goToPrevious1 = () => {
        setCurrentIndex1((prevIndex) => (prevIndex === 0 ? images1.length - 1 : prevIndex - 1));
    };

    const goToNext1 = () => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % images1.length);
    };

    // Functions for second carousel
    const goToPrevious2 = () => {
        setCurrentIndex2((prevIndex) => (prevIndex === 0 ? images2.length - 1 : prevIndex - 1));
    };

    const goToNext2 = () => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % images2.length);
    };

    return (
        <div className="container-fluid bgpink">
            <div className="row text-black">
                {/* First column */}
                <div className="col-12 col-md-6 d-flex flex-column align-items-center p-5">
                    <div className="phonedisplay2">
                        <img
                            src={images1[currentIndex1]}
                            alt={`Slide ${currentIndex1}`}
                            className="imageslider"
                        />
                    </div>
                    <div className="arrow button p-2">
                        <button onClick={goToPrevious1} style={{ marginRight: "15px" }}>▶</button>
                        <button onClick={goToNext1} style={{ marginRight: "15px" }}>▶</button>
                    </div>
                </div>

                {/* Second column */}
                <div className="col-12 col-md-6 p-5">
                    <span className="text-muted text-center text-md-start">
                        <h3><img src="/images/logosmall.png" alt="logosmall" className="img-fluid" width="50px" /> MarketPlace</h3>
                    </span>
                    <h1>What Our <span className='text-danger'>Customers</span><br /> Say About Us</h1>
                    
                    {/* Second carousel */}
                    <div className="testimonial-carousel">
                        <img
                            src={images2[currentIndex2]}
                            alt={`Testimonial ${currentIndex2}`}
                            className="imageslider"
                        />
                    </div>
                    <div className="arrow button p-2">
                        <button onClick={goToPrevious2} style={{ marginRight: "15px" }}>▶</button>
                        <button onClick={goToNext2} style={{ marginRight: "15px" }}>▶</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bodyarea2;
