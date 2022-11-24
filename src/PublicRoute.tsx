import { PublicRouteContainer } from "../design-system";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import LoginPage from "./LoginPage";
import ResetPasswordPage from "./ResetPasswordPage";
import SetPasswordPage from "./SetPasswordPage";

export default function PublicRoute() {
  const { path } = useRouteMatch();

  return (
    <PublicRouteContainer>
      <Switch>
        <Route path={`${path}login/`}>
          <LoginPage />
        </Route>
        <Route path={`${path}reset-password/`}>
          <ResetPasswordPage />
        </Route>
        <Route path={`${path}set-password/`}>
          <SetPasswordPage />
        </Route>
        <Route path="*">
          <Redirect to={`${path}login/`} />
        </Route>
      </Switch>
    </PublicRouteContainer>
  );
}
