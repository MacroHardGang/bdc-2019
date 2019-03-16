import React from 'react'

import HomePage from './components/home.jsx'
import RequirementsPage from './components/requirements.jsx'
import SelectionPage from './components/selection.jsx'
import ResultsPage from './components/results.jsx'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends React.Component {

  render() {
    return(
      <Router>
          <div>
              <div id="content-wrapper">
                <Route path="/" exact={true} component={HomePage}/>
                <Route path="/requirements" exact={true} component={RequirementsPage} />
                <Route path="/selection" exact={true} component={SelectionPage} />
                <Route path="/results" exact={true} component={ResultsPage} />
              </div>
          </div>
      </Router>
      )
  }

}

export default App;