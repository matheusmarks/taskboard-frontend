/* eslint-disable react/jsx-indent */
import React from 'react';
import Modal from 'react-modal';
import { ModalContent } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  taskGroupTitle: string;
}

Modal.setAppElement('#root');

export const TaskModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};
