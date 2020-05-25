import React from 'react';
import Layout from '../../layouts';
import SEO from '../../components/SEO';

const wellbeing = () => (
  <Layout>
    <SEO title="Wellbeing"/>
    <div className="intro">
      <div className="container">
        <div className="row">
          <iframe
            width="100%"
            height="800"
            title="mutual-aid-wiki"
            src="https://www.google.com/maps/d/embed?mid=13jU2zsGolUtY5-dAhCk2Y44Np3U"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default wellbeing;
