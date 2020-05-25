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
            Search Local Groups:
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=15COv-ATM1YFlhXhS6SaA3f5WmpSGuxRt" width="100%" height="800"/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            This is a wider searchable map of the whole world.
            <div>
              This map is from <a href="https://mutualaid.wiki">mutualaid.wiki</a>
            </div>
            <div>We could synchronise our whatsapp data with them.</div>
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
