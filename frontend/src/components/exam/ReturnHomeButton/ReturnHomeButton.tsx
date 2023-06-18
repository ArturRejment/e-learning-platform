import './ReturnHomeButton.scss';

import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';

const ReturnHomeButton = () => {
  return (
    <Link className="return-home-button" to={ROUTER_PATH.HOME}>
      <FaHome /> Return to Home
    </Link>
  );
};

export default ReturnHomeButton;
