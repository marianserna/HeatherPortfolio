import React from 'react'
import Link from 'gatsby-link'

import { Grid } from './styles'
import ProjectTile from '../components/ProjectTile'

export default ({ data }) => {
  // console.log(data)
  return (
    <Grid>
      {data.allContentfulProject.edges.map(edge => (
        <ProjectTile project={edge.node} key={edge.node.id} />
      ))}
    </Grid>
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
