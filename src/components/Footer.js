import React from "react";
import SSMMlinks from "./SSMMlinks";
import "../stylesheets/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contain">
        <SSMMlinks></SSMMlinks>
        <span className="footer__copy">
          <small>amandapalma ©</small>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
