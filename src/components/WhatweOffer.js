
import OFFER from "./WhatweOfferArray";
import "./WhatweOfferStyles.css";
import CLINIC1 from "../assets/clinic1.jpg";
import CLINIC2 from "../assets/clinic2.jpg";
import PHAR2 from "../assets/phar2.jpg";
import PHAR1 from "../assets/phar1.jpg";
const WhatweOffer = () => {
  return (
    <div className="destination">
      <OFFER
      className="first-des"
      heading= "Outpatient Clinic"
      text= "We provide best quality consulation and aid. Schedule with us an appointment!"
      img1={CLINIC1}
      img2={CLINIC2}
      />

      <OFFER
      className="first-des-reverse"
      heading= "Pharmacy"
      text= "We provide best quality medicine."
      img1={PHAR1}
      img2={PHAR2}
      />

    </div>
  );
};

export default WhatweOffer;
