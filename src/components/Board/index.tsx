import React from 'react';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { TaskGroup } from '../TaskGroup';
import { BoardContainer } from './styles';

export const Board: React.FC = () => {
  const [taskGroup, setTaskGroup] = useState([<div />]);
  const [createNewTaskGroup, setCreateNewTaskGroup] = useState(false);
  const [showTaskGroupInput, setShowTaskGroupInput] = useState(<div />);

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      setShowTaskGroupInput(<div />);
      setCreateNewTaskGroup(false);
      setTaskGroup([
        ...taskGroup,
        <TaskGroup taskGroupTitle={event.target.value} isNewTask />,
      ]);
    }
  }

  function handleCreateNewTaskGroup() {
    setCreateNewTaskGroup(true);
    setShowTaskGroupInput(
      <input
        type="text"
        placeholder="Nome do grupo"
        className="newTaskInput"
        onKeyPress={handleKeyDown}
      />,
    );
  }

  return (
    <BoardContainer>
      <TaskGroup taskGroupTitle="Não Iniciado" isNewTask={false} />
      <TaskGroup taskGroupTitle="Iniciado" isNewTask={false} />
      <TaskGroup taskGroupTitle="Em testes" isNewTask={false} />
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
