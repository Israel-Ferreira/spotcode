import React from 'react'
import {Switch, Route} from 'react-router-dom'

import HomeScreen from './screens/home/index'
import DiscoveryScreen from './screens/discovery/index'
import SearchScreen from './screens/search'
import AlbumScreen from './screens/album'


const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route  exact path="/discovery" component={DiscoveryScreen}  />
    <Route  exact path="/search" component={SearchScreen}  />
    <Route  exact path="/album" component={AlbumScreen}  />
  </Switch>
)

export default Routes