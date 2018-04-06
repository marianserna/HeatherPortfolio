import styled from 'styled-components'
import Link from 'gatsby-link'

const LinkContainer = styled.div`
  text-align: right;
  margin: 50px;
`

const ProjectImage = styled.img`
  max-width: 80%;
  max-height: 75vh;
  display: block;
  margin: 50px auto;
`

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-family: 'Fjalla One', sans-serif;
  margin: 50px;
  text-align: center;
`

const Description = styled.p`
  font-size: 1.3rem;
  font-family: 'Roboto', sans-serif;
  line-height: 2.8rem;
  padding: 0 10%;
  /* padding-top: 0; */
  margin: 50px;
`

const ProjectLink = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  margin: 20px;
  color: red;
  font-weight: bolder;
`

export { LinkContainer, ProjectImage, ProjectTitle, Description, ProjectLink }
