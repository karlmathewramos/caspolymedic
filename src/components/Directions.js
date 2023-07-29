import React from 'react';
import './DirectionsStyles.css'; // You'll need to create this CSS file to style the layout.
import sign from "../assets/thesign.png";

const MapWithText = () => {
  return (
    <div className="map-with-text-container">
      <div className="text-column">
        <h2>Address: </h2>
        <p>#20 Real Street Brgy. San Antonio Pob.  Alangalang,Leyte</p>
        <h2>Step by step directions: </h2>
        <p>If you are coming from Tacloban City take a jeep that will take you to Palo,
            Afterwards, ride another jeep that will take you to AlangAlang.
            Once you see a sign on the left that says "PHCCI" then CAS Polymedic is right beside it.
         
        </p>
        <h2>If you are still lost, down below is an image of our sign. </h2>
        <img src= {sign}/>
      </div>
      <div className="map-column">
        <iframe
          title="Embedded Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.60959756893706!2d124.84899882317228!3d11.205860639973562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33080ac67b2ad4e7%3A0xcb2ed3f8b4e39320!2sCas%20Pharmacy!5e0!3m2!1sen!2sus!4v1690660003507!5m2!1sen!2sus"
          width="1200"
          height="800"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default MapWithText;
