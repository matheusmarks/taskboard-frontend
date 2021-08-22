import React from 'react';
import { Header } from './components/Header';
import { Board } from './components/Board';
import './global.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Board />
    </>
  );
};

export default App;
