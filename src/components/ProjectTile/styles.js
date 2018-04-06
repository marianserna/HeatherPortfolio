import styled from 'styled-components'

const Item = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin: 0.5em;
  cursor: pointer;
`

const ItemImage = styled.img`
  max-width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export { Item, ItemImage }
