import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className= "top">
        <div>
        <h1> C.A.S Polymedic</h1>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>



      <div className= "bottom">
        <div>
          <h4>Services</h4>
          <a href= "/"> Schedule an Appointment</a>
          <a href= "/"> Outpatient Clinic</a>
          <a href= "/"> Pharmacy</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href= "/"> About</a>
          <a href= "/"> Careers</a>
          <a href= "/"> Blog</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href= "/"> Chat Support</a>
          <a href= "/"> Customer Service</a>
          <a href= "/"> FAQS</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
