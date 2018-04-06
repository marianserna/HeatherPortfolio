const path = require('path')
const { slugify } = require('./src/utils')
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
      const projects = result.data.allContentfulProject.edges

      projects.forEach(({ node }, i) => {
        const prevProject =
          i === 0 ? projects[projects.length - 1] : projects[i - 1]

        const nextProject =
          i === projects.length - 1 ? projects[0] : projects[i + 1]

        createPage({
          path: slugify(node.name),
          component: path.resolve('./src/templates/project.js'),
          context: {
            project: node,
            next: slugify(nextProject.node.name),
            nextImage: nextProject.node.image.file.url,
            prev: slugify(prevProject.node.name),
            prevImage: prevProject.node.image.file.url,
          },
        })
      })
      resolve()
    })
  })
}
