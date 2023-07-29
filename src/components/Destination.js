
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import CAS from "../assets/cas.jpg";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Ydestiantion</h1>
      <p> yep</p>

      <DestinationData
      className="first-des"
      heading= "Yeah"
      text= "hmmmmm"
      img1={CAS}
      img2={CAS}
      />

      <DestinationData
      className="first-des-reverse"
      heading= "Yeah2"
      text= "hmmmmm2"
      img1={CAS}
      img2={CAS}
      />

    </div>
  );
};

export default Destination;
