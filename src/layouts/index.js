import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './generic/reset.css'
import './generic/index.css'

import SideBar from '../components/SideBar'
import { OuterContainer } from './styles'

const TemplateWrapper = ({ children }) => (
  <OuterContainer>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Fjalla+One|Roboto:300"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </Helmet>
    <SideBar />
    <div
      style={{
        margin: '0 auto',
        marginLeft: '25vw',
        width: '75vw',
      }}
    >
      {children()}
    </div>
  </OuterContainer>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
