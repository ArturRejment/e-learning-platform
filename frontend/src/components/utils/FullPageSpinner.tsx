import { RotatingLines } from 'react-loader-spinner';

const navbarHeight = '80px';

const FullPageSpinner = () => (
  <div
    style={{
      height: `calc(100vh - ${navbarHeight})`,
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
  >
    <RotatingLines
      strokeColor="#3f88c5"
      strokeWidth="4"
      animationDuration="1"
      width="96"
      visible
    />
  </div>
);

export default FullPageSpinner;
