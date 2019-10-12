import React from 'react'
import useOnClickOutside from 'use-onclickoutside'

export const useDropdown = (ref, initialState) => {
  const [opened, toggle] = React.useReducer(prev => !prev, initialState)
  const listener = event => {
    if (!ref.current || ref.current.contains(event.target)) {
      return
    }

    toggle()
  }
  useOnClickOutside(ref ? ref : '', listener)

  return [opened, toggle]
}
