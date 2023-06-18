import './ExamResultsModal.scss';

import Modal from 'react-modal';

import { ExamResultsDto } from '../../../types/dtos';
import { modalStyles } from '../helpers';
import ReturnHomeButton from '../ReturnHomeButton';

Modal.setAppElement('#root');

type Props = {
  examResults: ExamResultsDto;
};

const ExamResultsModal = ({
  examResults: { score, passed, passingThreshold } = {} as ExamResultsDto,
}: Props) => {
  return (
    <Modal isOpen style={modalStyles} contentLabel="Exam Results">
      <div className="exam-results-modal">
        <div className="exam-results-modal__header">Exam Results</div>
        <div className="exam-results-modal__score">
          Score: <span>{score}</span>
        </div>
        <div className="exam-results-modal__passed">
          Passed: <span>{passed ? 'Yes' : 'No'}</span>
        </div>
        <div className="exam-results-modal__passing-threshold">
          Passing Threshold: {passingThreshold}%
        </div>
        <ReturnHomeButton />
      </div>
    </Modal>
  );
};

export default ExamResultsModal;
