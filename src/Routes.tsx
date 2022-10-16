import { Route, Switch } from "react-router-dom";
import { SignIn } from "./pages/SignIn";

function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={SignIn}></Route>
    </Switch>
  );
}

export { Routes };
