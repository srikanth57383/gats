// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`);

  const result = await graphql(`
    {
      allDataJson {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allDataJson.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: pageTemplate,
      context: {
        slug: node.path,
      }, // additional data can be passed via context
    });
  });
};
