/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useCallback } from 'react';
import { FiPlus, FiClock } from 'react-icons/fi';
import moment from 'moment';
import { TaskProps } from '../../dtos/TaskProps';
import { TaskModal } from '../Modal';
import { Content } from './styles';
import { useTasks } from '../../hooks/useTaskProvider';

export const Task: React.FC<TaskProps> = ({
  isNewTask,
  taskGroupTitle,
  taskContent,
}) => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const { data } = useTasks();

  const handleNewOpenTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  function handleCreateNewTask() {
    handleNewOpenTransactionModal();
  }

  let taskElements;
  let newTaskElement;

  if (data !== undefined) {
    newTaskElement = (
      <button type="button" key={data.id}>
        <p>{data.name}</p>
        <div>
          <input type="checkbox" className="test" />
          <span>
            <FiClock className="fiClock" />
          </span>
          <span>{moment(data.conclusionDate).format('DD/MM/yyyy')}</span>
        </div>
      </button>
    );
  }

  if (isNewTask === true) {
    taskElements = (
      <>
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
  }

  return <Content>{taskElements}</Content>;
};
