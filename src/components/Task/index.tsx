import React from 'react';
import { FiPlus, FiClock } from 'react-icons/fi';
import { Content } from './styles';

interface TaskProps {
  isNewTask?: boolean;
}

export const Task: React.FC<TaskProps> = ({ isNewTask }) => {
  let taskElements;

  if (isNewTask === true) {
    taskElements = (
      <button type="button" className="createNewCard">
        <span>
          Novo Card
          <FiPlus />
        </span>
      </button>
    );
  } else {
    taskElements = (
      <>
        <button type="button">
          <p>Montagem do menu lateral na página principal do aplicativo</p>
          <div>
            <input type="checkbox" className="test" />
            <span>
              <FiClock className="fiClock" />
            </span>
            <span>03 de mai 21</span>
          </div>
        </button>
        <button type="button">
          <p>Dashboard de Clientes</p>
          <div>
            <input type="checkbox" className="test" />
            <span>
              <FiClock className="fiClock" />
            </span>
            <span>03 de mai 21</span>
          </div>
        </button>
        <button type="button">
          <p>Cadastro de Clientes</p>
          <div>
            <input type="checkbox" className="test" />
            <span>
              <FiClock className="fiClock" />
            </span>
            <span>03 de mai 21</span>
          </div>
        </button>
        <button type="button" className="createNewCard">
          <span>
            Novo Card
            <FiPlus />
          </span>
        </button>
      </>
    );
  }

  return <Content>{taskElements}</Content>;
};
