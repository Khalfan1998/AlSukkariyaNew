import { Instagram } from "@material-ui/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center display-none">
          <p>+973 39994080</p>
          <a
            className="whatsapp"
            href="https://api.whatsapp.com/send?phone=97339994080"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Whatsapp Chat
          </a>
        </div>
        <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
          <a
            className="instagram"
            href="https://www.instagram.com/alsukkariya/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
