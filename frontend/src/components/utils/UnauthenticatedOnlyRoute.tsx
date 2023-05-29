import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTER_PATH } from '../../assets';
import { useAppSelector } from '../../hooks';

type Props = {
  component: ComponentType;
};

const UnauthenticatedOnlyRoute = ({ component: Component, ...rest }: Props) => {
  const { isAuthenticated, accessToken, refreshToken } = useAppSelector(
    ({ auth }) => auth,
  );

  if (isAuthenticated && accessToken !== null && refreshToken !== null) {
    return <Navigate replace to={ROUTER_PATH.HOME} />;
  }
  return <Component {...rest} />;
};

export default UnauthenticatedOnlyRoute;
