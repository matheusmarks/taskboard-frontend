import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Content } from './styles';

export const Task: React.FC = () => {
  return (
    <Content>
      <button type="button">
        <p>Montagem do menu lateral na página principal do aplicativo</p>
      </button>
      <button type="button">
        <p>Dashboard de Clientes</p>
      </button>
      <button type="button">
        <p>Cadastro de Clientes</p>
      </button>

      <button type="button" className="createNewCard">
        <span>
          Novo Card
          <FiPlus />
        </span>
      </button>
    </Content>
  );
};
