import React from 'react';
import { TaskGroupProps } from '../../dtos/TaskGroupProps';
import { Task } from '../Task';
import { BoardContent } from './styles';

export const TaskGroup: React.FC<TaskGroupProps> = ({
  taskGroupTitle,
  isNewTask,
}) => {
  return (
    <BoardContent>
      <header className="taskGroupTitle">
        <span className="spanTaskGroupTitle">{taskGroupTitle}</span>
      </header>
      <Task isNewTask={isNewTask} />
    </BoardContent>
  );
};
