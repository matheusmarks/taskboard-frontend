import styled from 'styled-components';

export const ModalContent = styled.div`
  width: 100%;
  height: fit-content;
  background-color: var(--light-gray);
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;

  .react-modal-close {
    float: right;
    background: none;
    border: none;
  }

  p {
    line-height: 3rem;
  }

  input {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d0d0d0;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + button {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 3rem;
    padding: 0 1.5rem;
    background: var(--dark-blue);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 500;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
