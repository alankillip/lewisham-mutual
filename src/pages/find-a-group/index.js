import React from 'react';
import Layout from '../../layouts';
import SEO from '../../components/SEO';

const findAgroup = () => (
  <Layout>
    <SEO title="Find A Group"/>
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            You can search by place name and post code here.
            <div>
              This map is from <a href="https://mutualaid.wiki">mutualaid.wiki</a>
            </div>
            <div>We should synchronise our whatsapp data with them.</div>
            <iframe
              width="100%"
              height="800"
              title="mutual-aid-wiki"
              src="https://mutualaid.wiki"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default findAgroup;
