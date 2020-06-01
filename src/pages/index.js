import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Layout from '../layouts/index';

const Home = (props) => {
  console.log('props', props);
  const content = props.data.allMarkdownRemark.edges[0].node;
  const {html, title} = content;
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
              <h1 className="title">{title}</h1>
              <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
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
