import React from 'react'

export const useResize = () => {
  const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleResizeWindow = () => setCurrentWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)

    return () => window.removeEventListener('resize', handleResizeWindow)
  }, [currentWidth])

  return [currentWidth]
}
