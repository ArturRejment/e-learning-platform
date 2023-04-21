import { useState, useLayoutEffect, PropsWithChildren } from 'react';
import { Router } from 'react-router-dom';
import { History } from 'history';

type CustomRouterProps = {
  history: History;
};

export const CustomRouter = ({
  history,
  ...props
}: PropsWithChildren<CustomRouterProps>) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};
