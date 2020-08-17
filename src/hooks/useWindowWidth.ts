import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const windowResizeHandler = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler)
    return () => {
      window.removeEventListener('resize', windowResizeHandler)
    }
  }, [])

  return width
}

export default useWindowWidth
