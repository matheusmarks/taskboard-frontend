import styled from 'styled-components';

export const BoardContent = styled.div`
  width: auto;
  height: fit-content;
  background-color: var(--medium-gray);

  div > & {
    margin-right: 3.125rem;
  }

  header {
    width: 100%;
    max-width: 370px;
    background-color: var(--dark-blue);
    padding: 1rem;

    span {
      color: var(--text-white);
      font-weight: 500;
      font-size: 1.1rem;
    }
  }
`;
