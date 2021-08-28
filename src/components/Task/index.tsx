import React, { ReactNode, useState } from 'react';
import { useCallback } from 'react';
import { FiPlus, FiClock, FiX } from 'react-icons/fi';
import { useMemo } from 'react';
import { TaskProps } from '../../dtos/TaskProps';
import { TaskModal } from '../Modal';
import { Content, DateComponent } from './styles';
import { TaskData } from '../../dtos/TaskData';
import { api } from '../../services/api';
import { convertDate } from '../../utils/convertDate';

export const Task: React.FC<TaskProps> = ({
  isNewTask,
  taskGroupTitle,
  taskContent,
}) => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [newTaskData, setNewTaskData] = useState<TaskData>();
  const [updateExistentTask, setUpdateExistentTask] = useState(false);
  const [taskId, setTaskId] = useState('');

  const handleNewOpenTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true);
  }, []);

  const handleCloseTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false);
  }, []);

  // Triggers the open modal function
  function handleCreateNewTask() {
    handleNewOpenTransactionModal();
  }

  // Save or update a task
  async function saveTask(): Promise<TaskData> {
    const convertedDate = new Date(taskDate);

    const data: TaskData = {
      name: taskName,
      group_name: taskGroupTitle,
      conclusionDate: convertedDate,
      task_id: '',
    };

    if (updateExistentTask === false) {
      await api.post('/task', data);
      setIsNewTransactionModalOpen(false);
      setNewTaskData(data);
    } else {
      let selectedTask: TaskData[] = [];

      await api.get('/task').then(response => {
        selectedTask = response.data;
      });

      if (selectedTask !== undefined) {
        const taskItem = selectedTask.find(item => item.task_id === taskId);
        await api.put(`/task/${taskItem?.task_id}`, data);
        setIsNewTransactionModalOpen(false);
        setNewTaskData(data);
      }
    }

    return data;
  }

  // Manage the state of the date component, specially the checkbox
  function handleDate(event: any, id: string, expiredDate: boolean | string) {
    event.stopPropagation();
    if (id !== undefined && id !== null) {
      const checkboxDateId = document.getElementById(id)!;
      if (event.target.checked) {
        checkboxDateId.style.backgroundColor = '#33CC95';
      } else if (expiredDate === true) {
        checkboxDateId.style.backgroundColor = '#E52E4D';
      } else {
        checkboxDateId.style.backgroundColor = '#FFF';
      }
    }
  }

  let taskElements;

  const newTaskElement = useMemo((): ReactNode => {
    if (newTaskData !== undefined) {
      setTaskId(newTaskData.task_id);
      const date = convertDate(newTaskData.conclusionDate);
      return (
        <button type="button" key={newTaskData.task_id}>
          <p>{newTaskData.name}</p>
          <DateComponent
            activeColor={date.expiredDate ? 'red' : 'transparent'}
            isActive
          >
            {date.convertedDate !== '' ? (
              <>
                <input
                  type="checkbox"
                  className="test"
                  onClick={handleCloseTransactionModal}
                />
                <span>
                  <FiClock className="fiClock" />
                </span>
                <span>{date.convertedDate}</span>
              </>
            ) : (
              ''
            )}
          </DateComponent>
        </button>
      );
    }
    return <div />;
  }, [newTaskData, handleCloseTransactionModal]);

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
  } else {
    taskElements = (
      <>
        {taskContent.map(item => {
          const date = convertDate(item.conclusionDate);
          return (
            <button
              type="button"
              key={item.task_id}
              onClick={() => {
                setTaskId(item.task_id);
                setUpdateExistentTask(true);
                handleCreateNewTask();
              }}
            >
              <p>{item.name}</p>
              <DateComponent
                id={item.task_id}
                activeColor={date.expiredDate ? 'red' : 'transparent'}
                isActive
              >
                {date.convertedDate !== '' ? (
                  <>
                    <input
                      type="checkbox"
                      className="test"
                      onClick={
                        event =>
                          handleDate(event, item.task_id, date.expiredDate)
                        // eslint-disable-next-line react/jsx-curly-newline
                      }
                    />
                    <span>
                      <FiClock className="fiClock" />
                    </span>
                    <span>{date.convertedDate}</span>
                  </>
                ) : (
                  ''
                )}
              </DateComponent>
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
