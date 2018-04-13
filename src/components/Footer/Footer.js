import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-call footer-col">
        <h4>The behaviour change people.</h4>
      </div>
      <div className="footer-col">
        <h6>Head Office</h6>
        <div>
          <p>
            The Social Marketing Gateway<br />
            Suite 106<br />
            Central Chambers<br />
            109 Hope Street <br />
            Glasgow <br />
            G2 6LL
          </p>
        </div>
      </div>

      <div className="footer-col">
        <h6>Contacts</h6>
        <div>
          <p>
            +44 141 387 7294<br />
            gateway@smgateway.co.uk
          </p>
        </div>
        <div className="founders">Founders</div>
        <div className="founder-name">
          <p>Andy</p>
        </div>
        <div>
          <p>
            +44 7970 512 249<br />
            andy@smgateway.co.uk
          </p>
        </div>
        <div className="founder-name">
          <p>Matt</p>
        </div>
        <div>
          <p>
            +44 7894 394 087<br />
            matt@smgateway.co.uk
          </p>
        </div>
      </div>

      <div className="footer-col">
        <h6>Browse</h6>
        <div className="footer-links">About us</div>
        <div className="footer-links">Our training</div>
        <div className="footer-links">Clients</div>
        <div className="footer-links">Resources</div>
        <div className="footer-links">News</div>
      </div>
    </div>
  </footer>
);

export default Footer;
