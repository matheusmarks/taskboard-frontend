import React from 'react';
import { Task } from '../Task';
import { BoardContent } from './styles';

export const TaskGroup: React.FC = () => {
  return (
    <BoardContent>
      <header className="taskGroupTitle">
        <span className="spanTaskGroupTitle">Em Planejamento</span>
      </header>
      <Task />
    </BoardContent>
  );
};
