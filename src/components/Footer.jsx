import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="techgenix-info">
          <b>TechGenix</b>
          <p>F-7 markaz, Islamabad techgenix</p>
          <p>Contact us at: info@techgenix.com</p>
          <p>
            Copyright @ 2021 TechGenixLtd.| <br />
            Privacy Policy | Terms and Conditions | <br />
            Advertise
          </p>
        </div>

        <div className="techgenix-CompanyAndPartners">
          <b>Company</b>
          <p>About</p>
          <p>Us</p>
          <p>Careers</p>
          <p>Labs</p>
          <p>Blog</p>
          <p>Team</p>

          <b>Partners</b>
          <p>AWS</p>
          <p>Micsrosoft</p>
          <p>Intel</p>
          <p>Imply</p>
        </div>

        <div className="techgenix-services">
          <b>Company</b>
          <p>Overview</p>
          <p>Cloud and DevOps</p>
          <p>Web Application</p>
          <p>Network Applications</p>
          <p>Design, UX</p>
          <p>axelerated Software</p>
          <p>Test Automation</p>
        </div>

        <div className="techgenix-SolutionsAndCustomers">
          <b>Solutions</b>
          <p>Overview</p>
          <p>Fintech</p>
          <p>K2</p>
          <p>Nvisible</p>

          <b>Customers</b>
          <p>SquareBook</p>
          <p>RoboMinors</p>
          <p>Lights</p>
          <p>NayaTel</p>
        </div>

        <div className="company-map">
          <iframe
            className="map-frame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106248.94363130227!2d72.97668125756277!3d33.67582655509275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf953cdd73e5%3A0x3cc7c66618162727!2sTechgenix%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1636459849169!5m2!1sen!2s"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
