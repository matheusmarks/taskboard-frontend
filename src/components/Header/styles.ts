import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 3rem;
  background: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  input {
    border: none;
    padding: 0.4rem;
    font-size: 1rem;
    background: ${shade(0.1, '#f0f0f1')};
    color: var(--gray);
  }

  .searchInput {
    width: 14rem;
    height: 2.3rem;
    border-radius: 0.3rem;
    padding: 0.3rem;
    background: ${shade(0.1, '#f0f0f1')};
  }

  .newTaskInput {
    width: 250px;
    height: 3rem;
    flex-shrink: 0;
    padding: 0.7rem;
  }
`;
