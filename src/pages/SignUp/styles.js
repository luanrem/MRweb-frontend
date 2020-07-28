import styled from 'styled-components';

export const Content = styled.div`
  input {
    background: inherit;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    border-width: 1px;
    height: 55px;
    width: 100%;
    padding: 0 15px;
    margin: 0 0 10px;
    color: black;
  }

  input:hover {
    border: 1px solid black;
  }

  input:focus {
    border: 2px solid #3f51b5;
  }
`;
