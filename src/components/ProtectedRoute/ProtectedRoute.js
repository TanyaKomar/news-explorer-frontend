import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component,isLoggedIn,logout, openSignInPopup }) => {
    if(!isLoggedIn) {
        openSignInPopup();
    }
  return <Route>{() => (isLoggedIn ? <Component logout={logout} isLoggedIn={isLoggedIn} /> : <Redirect to="/" />)}</Route>;
};

export default ProtectedRoute;


