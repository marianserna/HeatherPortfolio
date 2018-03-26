import React from 'react'
import PropTypes from 'prop-types'

const ProjectTile = ({ project }) => (
  <div>
    <img src={project.image.file.url} />
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
