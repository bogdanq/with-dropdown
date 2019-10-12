import React from 'react'
import styled from 'styled-components'
import { checkPopperPosition } from '../helpers/check-popper-position'
import { useDropdown, useResize } from '../hooks'

export const WithDropDown = ({ children, popper }) => {
  const wrapperRef = React.useRef(null)
  const popperRef = React.useRef(null)
  const [position, setPosition] = React.useState(null)
  const [opened, toogle] = useDropdown(wrapperRef)
  const [innerWidth] = useResize()

  React.useLayoutEffect(() => {
    if (wrapperRef.current && popperRef.current) {
      const wrapper = wrapperRef.current.getBoundingClientRect()
      const current = popperRef.current.getBoundingClientRect()

      const newPostion = checkPopperPosition(wrapper, current)

      setPosition({ ...newPostion, position: 'absolute' })
    }
  }, [opened, innerWidth])

  return (
    <Wrapper ref={opened ? wrapperRef : null}>
      {children(toogle, opened)}
      {opened && popper(position, popperRef)}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: auto;
`
