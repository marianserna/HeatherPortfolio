import React from 'react'
import Link from 'gatsby-link'
import './index.css'

import ProjectTile from '../components/ProjectTile'

export default ({ data }) => {
  // console.log(data)
  return (
    <div className="grid">
      {data.allContentfulProject.edges.map(edge => (
        <ProjectTile project={edge.node} key={edge.node.id} />
      ))}
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
