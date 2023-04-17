import { ThreeDots } from 'react-loader-spinner';

const Spinner = () => (
  <ThreeDots
    height="18"
    width="35"
    radius="6"
    color="white"
    ariaLabel="three-dots-loading"
    wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
    visible
  />
);

export default Spinner;
