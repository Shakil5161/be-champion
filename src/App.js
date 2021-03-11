import Teams from './components/Teams/Teams';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Teams></Teams>
          </Route>
          <Route path="/team-details/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
