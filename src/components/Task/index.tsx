/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useCallback } from 'react';
import { FiPlus, FiClock, FiX } from 'react-icons/fi';
import moment from 'moment';
import { TaskProps } from '../../dtos/TaskProps';
import { TaskModal } from '../Modal';
import { Content } from './styles';
import { TaskData } from '../../dtos/TaskData';
import { api } from '../../services/api';

export const Task: React.FC<TaskProps> = ({
  isNewTask,
  taskGroupTitle,
  taskContent,
}) => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleNewOpenTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  function handleCreateNewTask() {
    handleNewOpenTransactionModal();
  }

  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [newTaskData, setNewTaskData] = useState<TaskData>();

  async function saveTask(): Promise<TaskData> {
    const convertedDate = new Date(taskDate);

    const data: TaskData = {
      name: taskName,
      group_name: taskGroupTitle,
      conclusionDate: convertedDate,
      id: '',
    };

    await api.post('/task', data);
    setIsNewTransactionModalOpen(false);
    setNewTaskData(data);
    return data;
  }

  let taskElements;
  let newTaskElement;

  if (newTaskData !== undefined) {
    newTaskElement = (
      <button type="button" key={newTaskData.id}>
        <p>{newTaskData.name}</p>
        <div>
          <input type="checkbox" className="test" />
          <span>
            <FiClock className="fiClock" />
          </span>
          <span>{moment(newTaskData.conclusionDate).format('DD/MM/yyyy')}</span>
        </div>
      </button>
    );
  }

  if (isNewTask === true) {
    taskElements = (
      <>
        <button
          type="button"
          className="createNewCard"
          onClick={handleCreateNewTask}
        >
          <span>
            Novo Card
            <FiPlus />
          </span>
        </button>
        <TaskModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseTransactionModal}
          taskGroupTitle={taskGroupTitle}
        />
      </>
    );
  } else {
    taskElements = (
      <>
        {taskContent.map(item => {
          return (
            <button type="button" key={item.id}>
              <p>{item.name}</p>
              <div>
                <input type="checkbox" className="test" />
                <span>
                  <FiClock className="fiClock" />
                </span>
                <span>{moment(item.conclusionDate).format('DD/MM/yyyy')}</span>
              </div>
            </button>
          );
        })}
        {newTaskElement}
        <button
          type="button"
          className="createNewCard"
          onClick={handleCreateNewTask}
        >
          <span>
            Novo Card
            <FiPlus />
          </span>
        </button>
        <TaskModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseTransactionModal}
          taskGroupTitle={taskGroupTitle}
        >
          <button
            type="button"
            onClick={handleCloseTransactionModal}
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
        </TaskModal>
      </>
    );
  }

  return <Content>{taskElements}</Content>;
};
