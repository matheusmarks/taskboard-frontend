/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { ModalContent } from './styles';
import { api } from '../../services/api';
import { TaskData } from '../../dtos/TaskData';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  taskGroupTitle: string;
}

Modal.setAppElement('#root');

export const TaskModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
  taskGroupTitle,
}) => {
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');

  async function saveTask(): Promise<TaskData> {
    const convertedDate = new Date(taskDate);

    const data: TaskData = {
      name: taskName,
      group_name: taskGroupTitle,
      conclusionDate: convertedDate,
      id: '',
    };

    await api.post('/task', data);
    return data;
  }

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalContent>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <FiX />
        </button>
        <p>Descrição da Atividade</p>
        <input
          type="text"
          value={taskName}
          onChange={event => setTaskName(event.target.value)}
        />
        <p>Data de Entrega</p>
        <input
          type="date"
          value={taskDate}
          onChange={event => setTaskDate(event.target.value)}
        />
        <button type="submit" onClick={saveTask}>
          Salvar
        </button>
      </ModalContent>
    </Modal>
  );
};
