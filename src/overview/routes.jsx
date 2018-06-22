import React from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import Overview from './components/Overview'
import Security from './components/Security'

export default (
  <Main>
    <Route exact path="/" component={Overview} />
    <Route path="/security" component={Security} />
  </Main>
)

