import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({
  component: Component,
  user,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...rest} {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}
