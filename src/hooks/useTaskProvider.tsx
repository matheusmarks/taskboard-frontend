/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TaskData } from '../dtos/TaskData';
import { TaskGroupData } from '../dtos/TaskGroupData';
import { api } from '../services/api';

interface TaskGroupProviderProps {
  children?: ReactNode;
  data: TaskData;
}

interface TaskGroupContextData {
  tasks: TaskGroupData[];
  data: TaskData;
}

const TasksContext = createContext<TaskGroupContextData>(
  {} as TaskGroupContextData,
);

export const TaskProvider: React.FC<TaskGroupProviderProps> = ({
  children,
  data,
}) => {
  const [tasks, setTasks] = useState<TaskGroupData[]>([]);

  useEffect(() => {
    async function fetchData() {
      await api.get('/taskGroup').then(response => {
        setTasks(response.data);
      });
    }
    fetchData();
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, data }}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
