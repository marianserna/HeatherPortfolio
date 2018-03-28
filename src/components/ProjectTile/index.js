import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

import { slugify } from '../../utils'

const ProjectTile = ({ project }) => (
  <div>
    <Link to={`/${slugify(project.name)}`}>
      <img src={project.image.file.url} />
    </Link>
  </div>
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
