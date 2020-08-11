import React from 'react'

import Showcase from '../Showcase/Showcase'
import NetflixOriginals from '../NetflixOriginals/NetflixOriginals'

const MainContent: React.FC = () => {
  return (
    <>
      {/* Header */}
      <main>
        <NetflixOriginals />
        <Showcase title='My List' api='/trending/all/day' />
        <Showcase title='Trending Now' api='/trending/all/day' />
        <Showcase title='Top Rated' api='/movie/top_rated' />
        <Showcase
          title='Action Movies'
          api='/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28'
        />
        <Showcase
          title='Horror Movies'
          api='/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27'
        />
        <Showcase
          title='Documentary'
          api='/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99'
        />
      </main>
      {/* Footer */}
    </>
  )
}

export default MainContent
