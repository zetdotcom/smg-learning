import React from 'react';
import Link from 'gatsby-link';

import './index.scss';

import logo from '../images/logo.svg';
import experienced from '../images/icon-experienced.svg';
import flexible from '../images/icon-flexible.svg';
import practices from '../images/icon-practices.svg';
import quality from '../images/icon-quality.svg';
import case1 from '../images/case1.jpg';
import case2 from '../images/case2.jpg';
import case3 from '../images/case3.jpg';
import user_anne from '../images/user-anne.jpg';
import client_logo from '../images/client-logo.jpg';
import header_banner from '../images/header-banner.jpg';
import Testimonies from '../components/Testimonies/Testimonies.js';

const IndexPage = () => (
  <div>
    <header className="home-header">
      <div className="cover" />
      <div className="container">
        <nav>
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className="links">
            <ul>
              <Link to="/internal/">
                <li>about us</li>
              </Link>
              <li>our training</li>
              <li>resources</li>
              <li>news</li>
              <li>clients</li>

              <li>
                <span>contact us</span>
              </li>
            </ul>
          </div>
        </nav>
        <div className="about">
          <h3>Making a difference with behaviour change.</h3>
          <p>
            {' '}
            SMG is a collaborative network of passionate social marketers and behaviour change experts and trainers. SMG
            Learning delivers bespoke training, mentoring and coaching packages to build social marketing and behaviour
            change skills, capacity and confidence. Our training covers a range of topics:
          </p>
          <button className="btn btn-full">OUR COURSES</button>
        </div>
      </div>
    </header>

    <section className="choose-us-section">
      <div className="container">
        <h5>Why choose us?</h5>
        <div className="choose-us-list">
          <div className="choose">
            <div className="choose-img">
              <img src={experienced} />
            </div>
            <div className="choose-desc">
              <h4>We are experienced.</h4>
              <p> In training across a range of topics, including delivering behaviour change and social marketing.</p>
            </div>
          </div>

          <div className="choose ">
            <div className="choose-img">
              <img src={flexible} />
            </div>
            <div className="choose-desc">
              <h4>We are flexible.</h4>
              <p>
                {' '}
                We can work with your organisation to provide exactly the suite of trainng and resources that you
                require.
              </p>
            </div>
          </div>

          <div className="choose ">
            <div className="choose-img">
              <img src={practices} />
            </div>
            <div className="choose-desc">
              <h4>
                We follow best <br /> practices & buidance.
              </h4>
              <p> Where appropriate and relevant. Our training also supports strategic commitments.</p>
            </div>
          </div>

          <div className="choose ">
            <div className="choose-img">
              <img src={quality} />
            </div>
            <div className="choose-desc">
              <h4>
                Our emphasis is on <br />quality.
              </h4>
              <p>We measure that we have achieved the aims of any course we deliver before and after competition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="case-studies-section">
      <div className="container">
        <div className="title">
          <h5>Case studies</h5>
          <button className="btn btn-empty">more</button>
        </div>
        <div className="case-studies-list">
          <div className="case">
            <div className="case-img">
              {' '}
              <img src={case1} />
            </div>
            <div className="case-title">ChaMps Behaviour Change Training</div>
            <div className="case-desc">Delivering a bespoke training program</div>
          </div>
          <div className="case">
            <div className="case-img">
              {' '}
              <img src={case2} />
            </div>
            <div className="case-title">Motivational Interview Training in Stock-on-Trent</div>
            <div className="case-desc">Delivering courses to primary care staff</div>
          </div>
          <div className="case">
            <div className="case-img">
              {' '}
              <img src={case3} />
            </div>
            <div className="case-title">Gloucestershire Making Every Contact Count</div>
            <div className="case-desc">Training frontline staff in MECC</div>
          </div>
          <div className="case">
            <div className="case-img">
              {' '}
              <img src={case3} />
            </div>
            <div className="case-title">Gloucestershire Making Every Contact Count</div>
            <div className="case-desc">Training frontline staff in MECC</div>
          </div>
        </div>
      </div>
      {/* add blue-container-round class to blue-container to get width of 90% and rounded corners */}
      <div className="blue-container ">
        <div className="container">
          <h3>
            We are considerate to the <br />unique needs of every client.
          </h3>
          <Testimonies />
          <div className="light-blue-container">
            <div className="count">
              <div className="count-no">3,500</div>
              <div>
                <p>Training participants</p>
              </div>
            </div>
            <div className="count">
              <div className="count-no">1,003</div>
              <div>
                <p>Courses completed</p>
              </div>
            </div>
            <div className="count">
              <div className="count-no">64</div>
              <div>
                <p>Happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="clients-section">
      <div className="container">
        <h5>Just a few of our clients</h5>
        <div className="clients">
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
          <div className="client-logo">
            <img src={client_logo} alt="client logo" />
          </div>
        </div>
      </div>
      <div className="blue-container  ">
        <div className="for-bg bg-white" />
        <div className="for-bg bg-grey" />
        <div className="container">
          <h3>Want to work with us?</h3>
          <div className="testimony">
            <div className="testimony-desc">
              <p>
                If you require any more information or would like to set up an initial meeting, please get in touch.
                We'd love to hear from you and are deticated to finding the right solution for your business.
              </p>
            </div>
          </div>
          <button className="btn btn-full">get in touch</button>
        </div>
      </div>
    </section>
  </div>
);

export default IndexPage;
