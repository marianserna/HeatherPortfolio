import styled from 'styled-components'
import Link from 'gatsby-link'

const Aside = styled.div`
  width: 25vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`

const Name = styled.h1`
  font-size: 4rem;
  font-family: 'Fjalla One', sans-serif;
  text-align: center;
`

const Lastname = styled.h2`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`

const Navigation = styled.nav`
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
`

const Navlist = styled.ul`
  display: flex;
`

const Listitem = styled.li`
  padding: 10px;
  list-style: none;
`

const Navlink = styled(Link)`
  text-decoration: none;
`

export { Aside, Name, Lastname, Navigation, Navlist, Listitem, Navlink }
