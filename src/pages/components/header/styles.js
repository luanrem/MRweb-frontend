import styled from 'styled-components';

export const Container = styled.header`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex-direction: row;
  background: transparent;
  max-width: 2000px;

  color: white;


  background-image: linear-gradient(to bottom, black, transparent);

  .search {
    cursor: pointer;
    padding-right: 100px;
  }
`;

export const Titulo = styled.ul`
  list-style: none;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  li {
    display: inline-block;
    padding: 0px 20px;
    cursor: pointer;
  }

  li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width .4s;
  }

  li a:hover::after {
    width: 100%;
    transition: width .4s;
  }


  `;

  export const Profile = styled.h1`
    color: #333;
    padding-left: 100px;

  `;
