import { Modal } from '../UI/Modal';

import EditBookForm from './EditBookForm';
import { EditBookModalProps } from './interfaces';

const EditBookModal = ({ bookId, onClose }: EditBookModalProps) => {
  return (
    <Modal onClose={onClose}>
      <EditBookForm bookId={bookId} />
    </Modal>
  );
};

export default EditBookModal;
