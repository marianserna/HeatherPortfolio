import React from 'react'

const Project = ({ pathContext }) => {
  const project = pathContext

  return (
    <div>
      <h2>{project.name}</h2>
      <img src={project.image.file.url} />
      <p>{project.description.description}</p>
    </div>
  )
}

export default Project
