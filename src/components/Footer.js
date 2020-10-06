import React from "react";
import SSMMlinks from "./SSMMlinks";
import "../stylesheets/footer.scss";

const Footer = ()=>{return(
    <footer className="footer" >
        <SSMMlinks ></SSMMlinks>
        {/* <ul className="footer__ssmmfooter">
          <li className="icon">
            <a
              ClassName="footerGH"
              href="https://github.com/amandapalma"
              alt="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a
              ClassName="footerLin"
              href="https://www.linkedin.com/in/amanda~palma/"
              alt="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="icon">
            <a
              ClassName="footerTel"
              href="callto:0034687508122"
              alt="telephone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-mobile-alt"></i>
            </a>
          </li>
          <li className="icon">
            <a
              ClassName="footerMail"
              href="mailto:amandapalma00@gmail.com"
              alt="email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul> */}
        <span className="footer__copy">
          <small>amandapalma ©</small>
        </span>
      </footer>
      )
}
export default Footer;