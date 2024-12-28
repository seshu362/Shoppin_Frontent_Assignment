import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeRoute from './components/HomeRoute'
import Preview from './components/Preview'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/preview" component={Preview} />
      </Switch>
    )
  }
}

export default App
