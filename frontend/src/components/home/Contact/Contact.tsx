import './Contact.scss';

const Contact = () => {
  return (
    <div className="body">
      <div className="corse_feedback">
        <h1 className="course_feedback__header">
          Podziel się z nami uwagami co do Twojego kursu
        </h1>
        <form className="course_feedback__form">
          <input
            className="course_feedback__course_name"
            type="text"
            placeholder="Nazwa Kursu"
          />
          <br />
          <input
            className="course_feedback__feedback"
            type="text"
            placeholder="Uwagi do kursu"
          />
          <button className="corse_feedback__submit" type="submit">
            {' '}
          </button>
        </form>
      </div>
      <div className="site_feedback">
        <h1 className="site_feedback__header">
          Podziel się z nami uwagami co do działania strony
        </h1>
        <form className="site_feedback__form">
          <input
            className="site_feedback__feedback"
            type="text"
            placeholder="Uwagi do funkcjonowania strony"
          />
          <button className="site_feedback__submit" type="submit">
            {' '}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
