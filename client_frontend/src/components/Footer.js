import React from "react";
import { Instagram } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <p>+973 39994080</p>
        </div>
        <div className="card-name">
          {/* <img
            alt="paypal"
            src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lX.png"
          /> */}
        </div>
        <div className="card-name">
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
        <div className="card-name">
          {/* <img
            alt="discover"
            src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
          /> */}
        </div>
        <div className="card-name">
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
