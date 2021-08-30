import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Header } from './components/Header';
import { Board } from './components/Board';
import './global.css';
import { TaskProvider } from './hooks/useTaskProvider';
import { TaskData } from './dtos/TaskData';

const App: React.FC = () => {
  const initialTaskData: TaskData = {
    task_id: '',
    name: '',
    conclusionDate: new Date(),
    group_name: '',
  };

  return (
    <>
      <DragDropContext onDragEnd={() => {}}>
        <TaskProvider data={initialTaskData}>
          <Header />
          <Board />
        </TaskProvider>
      </DragDropContext>
    </>
  );
};

export default App;
