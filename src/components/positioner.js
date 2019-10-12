import styled from 'styled-components'

export const Positioner = styled.div`
  border: 1px solid red;
  padding: 15px;
  background: #fff;
  position: absolute;
  width: 200px;
  top: ${({ position }) => position && position.top}px;
  left: ${({ position }) => position && position.left}px;
`
