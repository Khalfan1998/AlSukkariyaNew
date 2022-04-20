import { Instagram, PhoneIphone, WhatsApp } from '@material-ui/icons';
import React from 'react'
import './FooterNewest.css';

const FooterNewest = () => {
  return (
    <div>
    <footer id="footer" class="footer style-01">
        
        <div class="section-010">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p style={{fontSize:"16px"}}><img className="logoFooter" alt="logo" src="/images/logo.png" /> +973 39994080</p>
                    </div>
                    <div class="col-md-6">
                        <div class="akasha-socials style-01">
                            <div class="content-socials">
                                <ul class="socials-list">
                                    
                                    <li>
                                    <a
                class="instagram"
                href="https://www.instagram.com/alsukkariya/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Instagram />
              </a>
                                    </li>
                                    <li>
                                    <a
                class="whatsapp"
                href="https://api.whatsapp.com/send?phone=97339994080"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <WhatsApp />
              </a>
                                    </li>
                                    

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="whatsAppDiv"></div>
    </footer>

    </div>
  )
}

export default FooterNewest