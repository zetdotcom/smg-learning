import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';

import './index.scss';
import './font-face.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SMG Learning"
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
    />

    <div
      style={{
        margin: '0 auto',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
