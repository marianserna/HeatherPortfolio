import React from 'react'

import {
  LinkContainer,
  ProjectImage,
  ProjectTitle,
  Description,
  ProjectLink,
} from './styles'

class Project extends React.Component {
  render() {
    const { project, next, prev } = this.props.pathContext
    const paras = project.description.description.split('\n')

    return (
      <div>
        <LinkContainer>
          <ProjectLink to={prev}>PREV</ProjectLink>
          <ProjectLink to={next}>NEXT</ProjectLink>
        </LinkContainer>

        <ProjectImage src={project.image.file.url} />
        <ProjectTitle>{project.name}</ProjectTitle>
        {paras.map((para, i) => <Description key={i}>{para}</Description>)}
      </div>
    )
  }
}

export default Project
