import React, { useState } from 'react';
import { TaskGroupData } from '../../dtos/TaskGroupData';
import { TaskGroupProps } from '../../dtos/TaskGroupProps';
import { api } from '../../services/api';
import { BoardContent } from './styles';

interface UpdateTaskGroupData {
  name: string;
}

export const TaskGroup: React.FC<TaskGroupProps> = ({
  taskGroupTitle,
  children,
}) => {
  const [showTaskGroupHeader, setShowTaskGroupHeader] = useState(false);
  const [showInputInTaskGroupHeader, setShowInputInTaskGroupHeader] = useState(
    <div />,
  );
  const [showUpdatedNewTaskGroupTitle, setShowUpdatedNewTaskGroupTitle] =
    useState(<div />);
  const [updateTaskGroupTitle, setUpdateTaskGroupTitle] =
    useState(taskGroupTitle);

  async function handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      setShowInputInTaskGroupHeader(<div />);
      // setUpdateNewTaskGroup(false);
      const data: UpdateTaskGroupData = {
        name: event.target.value,
      };

      let selectedTaskGroup: TaskGroupData[] = [];

      // Updating the task group name (title)
      await api.get('/taskGroup').then(response => {
        selectedTaskGroup = response.data;
      });

      if (selectedTaskGroup.length !== 0) {
        const taskGroupId = selectedTaskGroup.find(
          item => item.name === updateTaskGroupTitle,
        );

        await api.put(`/taskGroup/${taskGroupId?.task_group_id}`, data);

        setShowUpdatedNewTaskGroupTitle(
          <button
            className="taskGroupTitle"
            type="button"
            onClick={handleUpdateTaskGroupTitle}
          >
            <span className="spanTaskGroupTitle">{event.target.value}</span>
          </button>,
        );
      }
    }
  }

  function handleUpdateTaskGroupTitle() {
    setShowTaskGroupHeader(true);
    setShowUpdatedNewTaskGroupTitle(<div />);
    setShowInputInTaskGroupHeader(
      <input
        type="text"
        placeholder="Novo nome do grupo"
        className="newTaskInput"
        onKeyPress={handleKeyPress}
      />,
    );
  }

  return (
    <BoardContent>
      {showInputInTaskGroupHeader}
      {showUpdatedNewTaskGroupTitle}
      <button
        className="taskGroupTitle"
        hidden={showTaskGroupHeader}
        type="button"
        onClick={handleUpdateTaskGroupTitle}
      >
        <span className="spanTaskGroupTitle">{taskGroupTitle}</span>
      </button>
      {children}
    </BoardContent>
  );
};
