import { RotatingLines } from 'react-loader-spinner';

const FullPageSpinner = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
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
