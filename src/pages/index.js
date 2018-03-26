import React from 'react'
import Link from 'gatsby-link'

import ProjectTile from '../components/ProjectTile'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.allContentfulProject.edges.map(edge => (
        <ProjectTile project={edge.node} key={edge.node.id} />
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export const query = graphql`
  query ProjectsQuery {
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
`
