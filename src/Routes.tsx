import { Route, Switch, Redirect } from "react-router-dom";
import { Register } from "./pages/Register";
import { SignIn } from "./pages/SignIn";

function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={Register} />
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export { Routes };
