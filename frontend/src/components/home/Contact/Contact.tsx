import './Contact.scss';

import {
  useSubmitCourseFeedbackMutation,
  useSubmitSiteFeedbackMutation,
} from '../../../services/contact';

const Contact = () => {
  const HandleSubmitCourse = () => {
    useSubmitCourseFeedbackMutation({});
  };
  const HandleSubmitSite = () => {
    useSubmitSiteFeedbackMutation({});
  };

  return (
    <div className="contact">
      <div className="corse_feedback">
        <h1 className="course-feedback__header">
          Share your thoughts about the course!
        </h1>
        <form className="course-feedback__form" onSubmit={HandleSubmitCourse}>
          <input
            className="course-feedback__course-name"
            type="text"
            placeholder="Course Name"
          />
          <input
            className="course-feedback__feedback"
            type="text"
            placeholder="Course Feedback"
          />
          <button className="course-feedback__submit" type="submit">
            {' Submit '}
          </button>
        </form>
      </div>
      <div className="site-feedback">
        <h1 className="site-feedback__header">
          Share your thoughts about the site!
        </h1>
        <form className="site-feedback__form" onSubmit={HandleSubmitSite}>
          <input
            className="site-feedback__feedback"
            type="text"
            placeholder="Site Feedback"
          />
          <button className="site-feedback__submit" type="submit">
            {' Submit '}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
