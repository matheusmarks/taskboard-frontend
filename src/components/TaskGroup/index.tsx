import React from 'react';
import { Task } from '../Task';
import { BoardContent } from './styles';

interface TaskGroupProps {
  taskGroupTitle: string;
  isNewTask?: boolean;
}

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
