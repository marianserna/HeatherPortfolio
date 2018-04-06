import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import { Item, ItemImage } from './styles'
import { slugify } from '../../utils'

const ProjectTile = ({ project }) => (
  <Item>
    <Link to={`/${slugify(project.name)}`}>
      <ItemImage src={project.image.file.url} />
    </Link>
  </Item>
)

ProjectTile.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.shape({ description: PropTypes.string.isRequired })
      .isRequired,
    image: PropTypes.shape({
      file: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectTile
