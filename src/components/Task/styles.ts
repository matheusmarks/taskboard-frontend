import styled from 'styled-components';
import { transparentize } from 'polished';

interface DateComponentProps {
  isActive: boolean;
  activeColor: 'green' | 'red' | 'transparent';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
  transparent: '#fff',
};

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

export const DateComponent = styled.div<DateComponentProps>`
  width: fit-content;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  padding: 0.2rem;
  background-color: ${props =>
    props.isActive === true
      ? transparentize(0.1, colors[props.activeColor])
      : 'transparent'};

  span {
    font-weight: 400;
    font-size: 0.9rem;
    margin-left: 0.3rem;

    .fiClock {
      width: 12px;
      height: 12px;
    }
  }

  input {
    width: 0.75rem;
    height: 0.75rem;
    background-color: green;
  }
`;
