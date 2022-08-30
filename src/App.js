import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/Business"><News key="Business" pageSize={5} country = 'in' category = 'business'/></Route>
          <Route exact path="/Entertainment"><News key="Entertainment" pageSize={5} country = 'in' category = 'entertainment'/></Route>
          <Route exact path="/Technology"><News key="Technology" pageSize={5} country = 'in' category = 'technology'/></Route>
          <Route exact path="/Health"><News key="Health" pageSize={5} country = 'in' category = 'health'/></Route>
          <Route exact path="/"><News key="General" pageSize={5} country = 'in' category = 'general'/></Route>
          <Route exact path="/Sports"><News key="Sports" pageSize={5} country = 'in' category = 'sports'/></Route>
          <Route exact path="/Science"><News key="Science" pageSize={5} country = 'in' category = 'science'/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App