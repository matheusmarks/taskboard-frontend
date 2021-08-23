import styled from 'styled-components';

export const BoardContainer = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  padding: 3.125rem;
  overflow-x: auto;

  button {
    height: fit-content;
  }

  .createNewTaskGroup {
    width: 250px;
    height: 3rem;
    flex-shrink: 0;
    color: var(--dark-blue);
    font-weight: bold;
  }

  .newTaskInput {
    width: 250px;
    height: 3rem;
    flex-shrink: 0;
    padding: 0.7rem;
  }
`;
