import React from 'react';
import Layout from '../../layouts';
import SEO from '../../components/SEO';

const findAgroup = () => (
  <Layout>
    <SEO title="Find A Group" />
    <div className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            You can search by place name and post code here.
            Lewisham Groups are also listed in the 'Whatsapp Groups by Area' section of 'Resources'
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
