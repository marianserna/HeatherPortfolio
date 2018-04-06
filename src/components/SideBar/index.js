import React from 'react'
import Link from 'gatsby-link'

import {
  Aside,
  Name,
  Line,
  Lastname,
  Navigation,
  Navlist,
  Listitem,
  Navlink,
} from './styles'

const SideBar = () => (
  <Aside>
    <Name>HEATHER K.</Name>
    <Lastname>Halliday</Lastname>
    <Line />
    <Navigation>
      <Navlist>
        <Listitem>
          <Navlink to="/">HOME</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/about">ABOUT</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/contact">CONTACT</Navlink>
        </Listitem>
      </Navlist>
    </Navigation>
  </Aside>
)

export default SideBar
