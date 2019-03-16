import React from 'react'

import HomePage from './components/home.jsx'
import QuestionairePage from './components/questionaire.jsx'
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
                <Route path="/questionaire" exact={true} component={QuestionairePage} />
                <Route path="/selection" exact={true} component={SelectionPage} />
                <Route path="/results" exact={true} component={ResultsPage} />
              </div>
          </div>
      </Router>
      )
  }

}

export default App;