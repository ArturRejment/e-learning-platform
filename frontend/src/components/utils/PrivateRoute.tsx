import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { RouterPath } from '../../assets';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  component: ComponentType;
};

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
  const { isAuthenticated, isLoading, accessToken, refreshToken } =
    useAppSelector(({ auth }) => auth);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (!isAuthenticated || accessToken === null || refreshToken === null) {
    return <Navigate replace to={RouterPath.Login} />;
  }
  return <Component {...rest} />;
};

export default PrivateRoute;
