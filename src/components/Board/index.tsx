import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TaskGroupData } from '../../dtos/TaskGroupData';
import { api } from '../../services/api';
import { TaskGroup } from '../TaskGroup';
import { BoardContainer } from './styles';

export const Board: React.FC = () => {
  const [taskGroup, setTaskGroup] = useState([<div />]);
  const [createNewTaskGroup, setCreateNewTaskGroup] = useState(false);
  const [showTaskGroupInput, setShowTaskGroupInput] = useState(<div />);
  const [taskGroupData, setTaskGroupData] = useState<TaskGroupData[]>();

  // Return all the task groups from api
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    api.get('/taskGroup').then(response => {
      const taskGroups = response.data;
      setTaskGroupData(taskGroups);
    });
  }, []);

  // eslint-disable-next-line
  async function handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      setShowTaskGroupInput(<div />);
      setCreateNewTaskGroup(false);

      const data: TaskGroupData = {
        name: event.target.value,
      };

      await api.post('/taskGroup', data);

      setTaskGroup([
        ...taskGroup,
        <TaskGroup taskGroupTitle={event.target.value} isNewTask />,
      ]);
    }
  }

  // eslint-disable-next-line
  function handleCreateNewTaskGroup() {
    setCreateNewTaskGroup(true);
    setShowTaskGroupInput(
      <input
        type="text"
        placeholder="Nome do grupo"
        className="newTaskInput"
        onKeyPress={handleKeyPress}
      />,
    );
  }

  return (
    <BoardContainer>
      {taskGroupData?.map(taskGroupItem => {
        return (
          <TaskGroup
            taskGroupTitle={taskGroupItem.name}
            isNewTask={false}
            key={taskGroupItem.id}
          />
        );
      })}
      {taskGroup}
      {showTaskGroupInput}
      <button
        type="button"
        hidden={createNewTaskGroup}
        className="createNewTaskGroup"
        onClick={handleCreateNewTaskGroup}
      >
        <span>
          Novo Grupo
          <FiPlus className="fi-plus" />
        </span>
      </button>
    </BoardContainer>
  );
};
