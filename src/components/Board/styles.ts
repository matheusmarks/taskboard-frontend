import styled from 'styled-components';

export const BoardContainer = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  padding: 3.125rem;
  overflow: scroll;

  button {
    height: fit-content;
  }

  .createNewTaskGroup {
    width: 25%;
    height: 3rem;
    color: var(--dark-blue);
    font-weight: bold;
  }

  .newTaskInput {
    height: fit-content;
  }
`;
