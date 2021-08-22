import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { TaskGroup } from '../TaskGroup';
import { BoardContainer } from './styles';

export const Board: React.FC = () => {
  return (
    <BoardContainer>
      <TaskGroup />
      <TaskGroup />
      <TaskGroup />
      <button type="button" className="createNewTaskGroup">
        <span>
          Novo Grupo
          <FiPlus className="fi-plus" />
        </span>
      </button>
    </BoardContainer>
  );
};
