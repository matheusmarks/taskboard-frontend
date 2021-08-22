import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  padding: 1rem;

  button {
    border: none;
    background: var(--text-white);
    text-align: left;
    margin-bottom: 0.5rem;
    font-weight: bold;
    padding: 0.5rem;
  }

  .createNewCard {
    background: none;
    color: var(--dark-blue);
  }
`;
