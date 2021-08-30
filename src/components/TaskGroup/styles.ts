import styled from 'styled-components';

export const BoardContent = styled.div`
  width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background-color: var(--medium-gray);

  .droppableDiv {
    width: 100%;
    background-color: transparent;
  }

  div > & {
    margin-right: 3.125rem;
  }

  .taskGroupTitle {
    width: 100%;
    max-width: 370px;
    word-wrap: break-word;
    background-color: var(--dark-blue);
    padding: 1rem;
    border: none;

    span {
      color: var(--text-white);
      font-weight: 500;
      font-size: 1.1rem;
      text-align: left;
    }
  }
`;
