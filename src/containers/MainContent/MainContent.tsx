import React from 'react'

import Showcase from '../Showcase/Showcase'
import NetflixOriginals from '../NetflixOriginals/NetflixOriginals'
import { RootState } from '../../store/reducers/index'
import * as actions from '../../store/actions/index'

const MainContent: React.FC = () => {
  return (
    <div>
      <NetflixOriginals />
      <Showcase
        title='Trending Now'
        stateSelector={(state: RootState) => state.trending}
        action={actions.fetchTrending}
      />
      <Showcase
        title='Top Rated'
        stateSelector={(state: RootState) => state.top}
        action={actions.fetchTops}
      />
      <Showcase
        title='Action Movies'
        stateSelector={(state: RootState) => state.action}
        action={actions.fetchAction}
      />
      <Showcase
        title='Horror Movies'
        stateSelector={(state: RootState) => state.horror}
        action={actions.fetchHorror}
      />
      <Showcase
        title='Documentary'
        stateSelector={(state: RootState) => state.docu}
        action={actions.fetchDocu}
      />
      {/* <Showcase title='My List' api='/trending/all/day' /> */}
    </div>
  )
}

export default MainContent
