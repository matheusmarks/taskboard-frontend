import React from 'react';
import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { TaskGroupData } from '../../dtos/TaskGroupData';
import { useTasks } from '../../hooks/useTaskProvider';
import { api } from '../../services/api';
import { Task } from '../Task';
import { TaskGroup } from '../TaskGroup';
import { BoardContainer } from './styles';

export const Board: React.FC = () => {
  const [taskGroup, setTaskGroup] = useState([<div />]);
  const [createNewTaskGroup, setCreateNewTaskGroup] = useState(false);
  const [showTaskGroupInput, setShowTaskGroupInput] = useState(<div />);

  const { tasks } = useTasks();

  const taskItems: TaskGroupData[] = tasks.map(itemGroupTask => {
    return itemGroupTask;
  });

  async function handleKeyPress(event: any) {
    if (event.key === 'Enter') {
      setShowTaskGroupInput(<div />);
      setCreateNewTaskGroup(false);

      const data: TaskGroupData = {
        tasks: [],
        name: event.target.value,
      };

      await api.post('/taskGroup', data);

      const elementKey = uuid();

      setTaskGroup([
        ...taskGroup,
        <TaskGroup
          taskGroupTitle={event.target.value}
          isNewTask
          taskGroupContent={tasks}
        >
          <Task
            isNewTask
            taskGroupTitle={event.target.value}
            key={elementKey}
            taskContent={[]}
          />
        </TaskGroup>,
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
      {taskItems?.map(taskGroupItem => {
        return (
          <TaskGroup
            taskGroupTitle={taskGroupItem.name}
            isNewTask={false}
            key={taskGroupItem.task_group_id}
            taskGroupContent={tasks}
          >
            <Task
              taskContent={taskGroupItem.tasks}
              isNewTask={false}
              key={taskGroupItem.task_group_id}
              taskGroupTitle={taskGroupItem.name}
            />
          </TaskGroup>
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
