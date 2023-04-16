import { History } from 'history';
import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

type CustomRouterProps = {
  history: History;
};

const CustomRouter = ({
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

export default CustomRouter;
