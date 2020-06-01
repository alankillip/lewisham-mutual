import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Home = (props) => {
  console.log('props', props);
  const html = props.data.allMarkdownRemark.edges[0].node.html;
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
              {html}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/home/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`

export default Home;
