import React from 'react';
import { TaskGroupProps } from '../../dtos/TaskGroupProps';
import { BoardContent } from './styles';

export const TaskGroup: React.FC<TaskGroupProps> = ({
  taskGroupTitle,
  children,
}) => {
  return (
    <BoardContent>
      <header className="taskGroupTitle">
        <span className="spanTaskGroupTitle">{taskGroupTitle}</span>
      </header>
      {children}
    </BoardContent>
  );
};
