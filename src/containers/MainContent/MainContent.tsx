import React from 'react'

import Trending from '../Trending/Trending'
import NetflixOriginals from '../NetflixOriginals/NetflixOriginals'

const MainContent: React.FC = () => {
  return (
    <>
      {/* Header */}
      <main>
        <NetflixOriginals />
        <Trending />
      </main>
      {/* Footer */}
    </>
  )
}

export default MainContent
