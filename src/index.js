import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './MOappcomponenets/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper.js)
import Bodyarea1 from './MOappcomponenets/Bodyarea1';
import Phonedisplaybuttons from './MOappcomponenets/Phonedisplaybuttons';
import Bodyarea2 from './MOappcomponenets/Bodyarea2';
import Bodyarea3 from './MOappcomponenets/Bodyarea3';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
  
            <Banner />
           <Bodyarea1 />
           <Bodyarea2 />
           <Bodyarea3 />
           <Phonedisplaybuttons />

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

