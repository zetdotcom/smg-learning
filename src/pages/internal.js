import React from 'react';
import Link from 'gatsby-link';

import './index.scss';
import './internal.scss';

import logo from '../images/logo.svg';
import user_anne from '../images/user-anne.jpg';
import header_banner2 from '../images/header-banner-2.jpg';

const Internal = () => (
  <div className="internal">
    <header className="internal">
      <img className="banner" src={header_banner2} alt="header banner" />
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
          <h3>About us</h3>
          <p>
            {' '}
            SMG is a collaborative network of passionate social marketers and behaviour change experts and trainers. SMG
            Learning delivers bespoke training, mentoring and coaching packages to build social marketing and behaviour
            change skills, capacity and confidence. Our training covers a range of topics.
          </p>
          <button className="btn btn-full">OUR COURSES</button>
        </div>
      </div>

      <div className="light-blue-container internal">
        <div className="david-call">
          <div className="text">
            "We all really enjoyed working with SMG and highly regard the professional approach they took."
          </div>
          <p>David Bundy, Kirklees Council</p>
        </div>
      </div>
    </header>

    <section className="offer-section">
      <div className="container">
        <div className="what-we-offer">
          <h5>What we offer</h5>
          <div>
            <p>
              We offer a wide range of training and related support focusing on a variety of topics and catering for
              people with differing levels of knowledge.<br />
              <br /> At the moment, our <a href=""> Making Every Contact Count (MECC)</a>,{' '}
              <a href="">Motivational Interviewing</a> and <a href="">Train the Trainer </a> courses are particularly
              popular. We also continue to offer a mix of <a href="">social marketing training</a> which we have been
              delivering to public and third sector bodies for several years.<br />
              <br /> These are especially suited to practitioners involved in designing, delivering and evaluating
              customer-focused interventions and projects that encourage healthier and more environmentally sustainable
              lifestyle behaviours. A course on cross-sector stakeholder partnership working is also available.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="choose-us-section">
      <div className="container">
        <div className="title">
          <h5>Why choose us</h5>
        </div>
        <div className="choose-us-desc">
          <div className="col">
            <h6>We are epxerienced across a range of topics.</h6>
            <p>
              Our training team brings a rich wealth of experience of cross sector training, with participants coming
              from local councils, government agencies, primary care, acute hospital care and third sector bodies.
              Several thousands of staff, working at all organisational levels, have benefited from SMG training.
            </p>
            <br />
            <h6>We are very flexible</h6>
            <p>
              We are very flexible and do not rely on ‘off the shelf’ products. We work with your organisation to
              provide exactly the suite of training and resources that you require, tailored to your organisational
              requirements.{' '}
            </p>
            <p>
              We follow relevant best practice and guidance, for example from Public Health England, Health Education
              England and the National Centre for Social Marketing.{' '}
            </p>
            <p>
              Our training also supports broad policy strategic commitments, such as the Government’s promise to make
              every healthcare contact a health improvement opportunity and the NHS’s goal to ‘build a workforce for
              prevention’.
            </p>
          </div>
          <div className="col">
            <h6>We provide accredited training</h6>
            <p>
              {' '}
              for instance our MECC skills training course is accredited by the Royal Society for Public Health, and can
              lead your organisation through the accreditation process if required
            </p>
            <br />
            <h6>We offer a rounded package to support the delivery of our programmes.</h6>
            <p>
              {' '}
              as well as training, we can also provide you with communications and recruitment support, booking
              administration, venue management, evaluation and other help to embed the use of new competencies in day to
              day practice.
            </p>
            <br />
            <h6>
              Our emphasis is on quality and on measuring that we have achieved the aims of the courses that we deliver.
            </h6>{' '}
            <p>
              {' '}
              We undertake pre and post questionnaires with all participants and provide clients with an evaluation
              report immediately after training delivery. We also offer further follow-up evaluation at agreed
              intervals.
            </p>
          </div>
        </div>
      </div>
      {/* add blue-container-round class to blue-container to get width of 90% and rounded corners */}
      <div className="blue-container">
        <div className="container">
          <h3>
            Our existing clients and <br />participants value our provision
          </h3>
          <div className="testimonies">
            <div className="testimony">
              <div className="testimony-img">
                <img src={user_anne} alt="profile picture" />
              </div>
              <div className="testimony-desc">
                <p>
                  SMG have been pivotal in enabling us to address our Making Ever Contact Count (MECC) training
                  requirements. We have been praticularly impresses with their facilitiator's ability to vary their
                  approach to effectively inform and educate groups of a variety of sizes and professionalisms.
                </p>
                <div className="testimony-author">
                  <p>Mark Tickener, London Borough of Enfield</p>
                </div>
              </div>
            </div>
            <div className="testimony">
              <div className="testimony-img">
                <img src={user_anne} alt="profile picture" />
              </div>
              <div className="testimony-desc">
                <p>
                  I firstly want to say a huge thank you and offer my sincerest gratitude to all at SMG for all your
                  hard work in making MECC training in KSS such a success. SMG have proved to be an outstanding training
                  organisation and you have really shown ambition and enthusiasm in driving forward MECC.
                </p>
                <div className="testimony-author">
                  <p>Kevin Driscoll, Medway Council</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="offer2-section">
      <div className="container">
        <h5>What do we offer?</h5>
        <p>
          We always stat by looking at your specific requirements and<br /> can tailor out support on a number of
          levels:
        </p>
        <div className="offer2-levels">
          <div className="level">
            <div />
            <div>
              <h4>Comprehensive package</h4>
            </div>
            <div>
              <p>
                A tailored training programme with a full range of promotional support, research and evaluation, and
                help to embed skills in day to day practice.
              </p>
            </div>
          </div>
          <div className="level">
            <div />
            <div>
              <h4>Training package</h4>
            </div>
            <div>
              <p>
                A tailored training only programme covering the specified competences required by participants. Training
                can range from part of a day to running over several days, with time in between, to give participants an
                opportunity to try our new skills.
              </p>
            </div>
          </div>
          <div className="level">
            <div />
            <div>
              <h4>Self-led learning advice and guidance</h4>
            </div>
            <div>
              <p>Web and mobile phone based applications and e-learning.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-container  ">
        <div className="for-bg bg-white" />
        <div className="for-bg bg-grey" />
        <div className="container">
          <h3>Want to know more?</h3>
          <div className="testimony">
            <div className="testimony-desc">
              <p>
                For more information about any of our courses, including <br />pricing, please git in touch.
              </p>
            </div>
          </div>
          <button className="btn btn-full">get in touch</button>
        </div>
      </div>
    </section>
  </div>
);

export default Internal;
