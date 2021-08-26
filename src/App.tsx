import React from 'react';
import { Header } from './components/Header';
import { Board } from './components/Board';
import './global.css';
import { TaskProvider } from './hooks/useTaskProvider';
import { TaskData } from './dtos/TaskData';

const App: React.FC = () => {
  const initialTaskData: TaskData = {
    id: '',
    name: '',
    conclusionDate: new Date(),
    group_name: '',
  };

  return (
    <>
      <TaskProvider data={initialTaskData}>
        <Header />
        <Board />
      </TaskProvider>
    </>
  );
};

export default App;
