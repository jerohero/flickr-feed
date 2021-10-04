import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Photos from './photos'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ Photos }/>
      </Switch>
    </Router>
  )
}

export default App
