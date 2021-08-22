import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <div className="searchInput">
        <input type="text" placeholder="Localizar Atividade" />

        <a href="/">
          <FaSearch color="#000" />
        </a>
      </div>

      <a href="/">
        <FaBell color="#f0f0f1" />
      </a>
    </Container>
  );
};
