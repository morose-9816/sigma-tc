import React from 'react';
import './footer.css';

export function Footer(){
    return(
        <footer className="mainfooter" role="contentinfo">
    <div className="footer-middle">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="footer-pad">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/1200px-Standard_Chartered.svg.png" alt="" />
            <ul className="list-unstyled">
                <br />
              <li><a href="https://www.sc.com/en/accessibility/">Accessibility</a></li>
              <li><a href="https://www.sc.com/en/terms-of-use/">Terms of Use</a></li>
              <li><a href="https://www.sc.com/en/privacy-policy/">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-pad">
            <br />
            <br />
            <br />
            <ul className="list-unstyled">
              <li><a href="https://www.sc.com/global/security-tips/">Online Security</a></li>
              <li><a href="https://www.sc.com/en/about/fighting-financial-crime/#fighting-fraud">Fighting Fraud</a></li>
              <li><a href="https://www.sc.com/en/faqs/">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="footer-pad">
              <br />
              <br />
              <br />
              <ul className="list-unstyled">
              <li><a href="https://www.sc.com/en/our-locations/">Our Locations</a></li>
              <li><a href="https://www.sc.com/en/contact-us/">Contact Us</a></li>
              <li><a href="https://www.sc.com/en/site-map/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
              <br />
              <br />
              <br />
          <h4>Follow Us</h4>
              <ul className="social-network social-circle">
                  <li><a href="https://www.linkedin.com/company/standardchartered/" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://www.twitter.com/stanchart" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://www.youtube.com/standardchartered" className="icoYoutube" title="Youtube"><i className="fa fa-youtube"></i></a></li>
                  <li><a href="https://www.facebook.com/standardchartered" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
              </ul>				
      </div>
      </div>
    <div className="row">
      <div className="col-md-12 copy">
        <p className="text-center">&copy; Copyright © 2021 Standard Chartered Bank </p>
      </div>
    </div>
   </div>
    </div>
  </footer>
    );
}
export default Footer;