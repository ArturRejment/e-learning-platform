import './ExamResultsModal.scss';

import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '../../../assets';
import { ExamResultsDto } from '../../../types/dtos';

Modal.setAppElement('#root');
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '50px',
  },
};

type Props = {
  examResults: ExamResultsDto;
};

const ExamResultsModal = ({
  examResults: { score, passed, passingThreshold },
}: Props) => {
  return (
    <Modal isOpen style={modalStyles} contentLabel="Exam Results">
      <div className="exam-results-modal__header">Exam Results</div>
      <div className="exam-results-modal__score">Score: {score}</div>
      <div className="exam-results-modal__passed">
        Passed: {passed ? 'Yes' : 'No'}
      </div>
      <div className="exam-results-modal__passing-threshold">
        Passing Threshold: {passingThreshold}
      </div>
      <Link className="exam-results-modal__link" to={ROUTER_PATH.HOME}>
        Return to Home
      </Link>
    </Modal>
  );
};

export default ExamResultsModal;
