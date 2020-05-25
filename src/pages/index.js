import React from 'react';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Home = () => {
  return (
    <Layout bodyClass="page-home">
      <SEO title="Home"/>
      <Helmet>
        <meta
          name="description"
          content="Resources for mutual aid volunteers in the Lewisham Area."
        />
      </Helmet>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              [...content based on the 'start here' tab of the google sheet]
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
