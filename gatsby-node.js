const path = require('path')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject {
          edges {
            node {
              id
              name
              image {
                file {
                  url
                  fileName
                  contentType
                }
              }
              description {
                description
              }
            }
          }
        }
      }
    `).then(result => {
      // console.log(JSON.stringify(result, null, 4))

      result.data.allContentfulProject.edges.forEach(({ node }, i) => {
        createPage({
          path: node.name
            .replace(/\s+/g, '-')
            .toLowerCase()
            .replace(/[^a-z-]/g, ''),
          component: path.resolve('./src/templates/project.js'),
          context: node,
        })
      })
      resolve()
    })
  })
}
