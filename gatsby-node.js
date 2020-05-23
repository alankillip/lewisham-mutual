const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          query {
            resources: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/resources/" } }
              sort: { fields: [frontmatter___order], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    order
                  }
                  excerpt
                }
              }
            }
          }
        `,
      ).then((result) => {
        console.log('result', result);
        result.data.resources.edges.forEach(({ node }) => {
          console.log('node', node.frontmatter.title);
          const component = path.resolve('src/templates/service.js');
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id,
            },
          });
        });
        resolve();
      }),
    );
  });
};
