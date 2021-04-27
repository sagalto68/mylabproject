import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import SignupPage from './pages/signup';
import LoginPage from './pages/login'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>
)

export default Routes;
