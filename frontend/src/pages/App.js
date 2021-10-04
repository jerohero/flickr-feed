import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Hero from '../components/hero/hero'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hero}/>
      </Switch>
    </Router>
  )
}

export default App
