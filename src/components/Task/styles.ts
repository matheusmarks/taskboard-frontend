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

    div {
      width: fit-content;
      border-radius: 0.2rem;
      padding: 0.2rem;

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
    }
  }

  .createNewCard {
    background: none;
    color: var(--dark-blue);
  }
`;
