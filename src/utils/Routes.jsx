import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useLocation } from "react-router";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>{children}</>;
}


export function Routes(routes) {
  return function RoutesComp({ location, match }) {
    const pathPrefix = match?.path || "";
    return (
      <ScrollToTop>
        <Switch>
          {routes.map((props, i) => {
            const path = props.path ? `${pathPrefix}${props.path}` : undefined;
            const newProps = {
              ...props,
              path,
            };
            return <Route key={i} {...newProps} />;
          })}
        </Switch>
      </ScrollToTop>
    );
  };
}
