import { Redirect, Route, Router, Switch } from "react-router";
import PublicRoute from "./PublicRoute";
import { history } from "./history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/">
          <PublicRoute />
        </Route>
        <Route path="*">
          <Redirect to="/auth/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
