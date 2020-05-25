import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  border: 0;
  display: flex;
  width: auto;
  align-items: center;

  .nomefuncao {
    padding-right: 0 10px;
    list-style: none;
    text-align: right;
    padding-right: 15px;
  }

  .nome {
    font-size: 16px;
    font-weight: bold;
  }

  .funcao {
    font-style: italic;
  }

 img {
   width: 55px;
   border-radius: 50%;
   border: 0 20px;
 }
`;



