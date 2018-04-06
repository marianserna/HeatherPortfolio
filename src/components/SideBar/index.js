import React from 'react'
import Link from 'gatsby-link'

import {
  Aside,
  Name,
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
    <hr />
    <Navigation>
      <Navlist>
        <Listitem>
          <Navlink to="/">home</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/about">about</Navlink>
        </Listitem>
        <Listitem>
          <Navlink to="/contact">contact</Navlink>
        </Listitem>
      </Navlist>
    </Navigation>
  </Aside>
)

export default SideBar
