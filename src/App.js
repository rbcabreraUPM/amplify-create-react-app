import './App.css'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import screens
import Home from './screens/Home'
import Blog from './screens/Blog'
const App = () => {
  return (
    <>
      <Router basename='/rjbc-dev'>
        <Navbar></Navbar>

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/projects' exact component={Blog}></Route>
          <Route path='/blog' exact component={Blog}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
