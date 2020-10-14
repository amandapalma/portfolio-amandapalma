import React from "react";
import "../stylesheets/ssmmlinks.scss";



const SSMMlinks = ()=>{return (
<div className="ssmmMenu">
   <li className="ssmmIcon">
  <a
    className="footerGH"
    href="https://github.com/amandapalma"
    alt="github"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-github"></i>
  </a>
</li>
 <li className="ssmmIcon">
  <a
    className="footerLin"
    href="https://www.linkedin.com/in/amanda~palma/"
    alt="linkedin"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>
</li>
 <li className="ssmmIcon">
  <a
    className="footerTel"
    href="callto:0034687508122"
    alt="telephone"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fas fa-mobile-alt"></i>
  </a>
</li>
 <li className="ssmmIcon">
  <a
    className="footerMail"
    href="mailto:amandapalma00@gmail.com"
    alt="email"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fas fa-envelope"></i>
  </a>
</li>
</div>

)}

export default SSMMlinks;