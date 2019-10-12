import React from 'react'
import { WithDropDown, Positioner } from './components'
import { useDropdown } from './hooks'

function App() {
  const [opened, toogle] = useDropdown()
  return (
    <>
      <h1>Open the popper anywhere on the page </h1>
      <div className='App'>
        {['first', 'second', 'third'].map(item => (
          <WithDropDown
            popper={(style, ref) => (
              <Positioner ref={ref} style={style}>
                {item} some popper
              </Positioner>
            )}
          >
            {(open, isOpen) => (
              <button onClick={open}>
                {isOpen ? 'close' : 'open'} {item} popper
              </button>
            )}
          </WithDropDown>
        ))}
      </div>

      <h1>You can use hook to open the sidebar</h1>
      <button onClick={toogle}>{opened ? 'Close' : 'Open'} sidebar</button>
      <div className='sidebar-wrapper'>
        <div className='left'>left</div>
        {opened && <div className='right'>right</div>}
      </div>
    </>
  )
}

export default App
