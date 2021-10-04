import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ Home }/>
      </Switch>
    </Router>
  )
}

export default App
