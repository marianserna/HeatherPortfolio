import styled from 'styled-components'
import Link from 'gatsby-link'

const Aside = styled.div`
  width: 25vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(190, 177, 180, 0.1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Name = styled.h1`
  font-size: 4rem;
  font-family: 'Fjalla One', sans-serif;
  text-align: center;
  padding-bottom: 5px;
  color: #212121;
`

const Line = styled.hr`
  border: 0.5px solid #beb1b4;
  width: 80%;
`

const Lastname = styled.h2`
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  text-align: right;
  padding-right: 20%;
  margin-bottom: 15px;
  color: #212121;
`

const Navigation = styled.nav`
  margin-top: 15px;
  font-size: 1rem;
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
  color: #e0474c;
  padding: 5px;
  transition: all 1s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export { Aside, Name, Line, Lastname, Navigation, Navlist, Listitem, Navlink }
