import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../assets';
import { useAppSelector } from '../../hooks';
import FullPageSpinner from './FullPageSpinner';

type Props = {
  component: ComponentType;
};

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const { isAuthenticated, isLoading, accessToken, refreshToken } =
    useAppSelector(({ auth }) => auth);

  if (isLoading) {
    return <FullPageSpinner />;
  }
  if (!isAuthenticated || accessToken === null || refreshToken === null) {
    return <Navigate replace to={ROUTER_PATH.LOGIN} />;
  }
  return <Component {...rest} />;
};

export default PrivateRoute;
