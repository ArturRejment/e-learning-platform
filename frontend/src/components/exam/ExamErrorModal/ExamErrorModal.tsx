import './ExamErrorModal.scss';

import Modal from 'react-modal';

import { modalStyles } from '../helpers';
import ReturnHomeButton from '../ReturnHomeButton';

Modal.setAppElement('#root');

type Props = {
  error: string;
};

const ExamErrorModal = ({ error }: Props) => {
  return (
    <Modal isOpen style={modalStyles} contentLabel="Exam Error">
      <div className="exam-error-modal">
        <p className="exam-error-modal__header">Error</p>
        <p className="exam-error-modal__content">{error}</p>
        <ReturnHomeButton />
      </div>
    </Modal>
  );
};

export default ExamErrorModal;
