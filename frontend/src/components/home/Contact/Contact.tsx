import './Contact.scss';

import CourseFeedback from '../../feedback/CourseFeedback/index';
import SiteFeedback from '../../feedback/SiteFeedback/index';

const Contact = () => {
  return (
    <div className="contact">
      <CourseFeedback />
      <SiteFeedback />
    </div>
  );
};

export default Contact;
