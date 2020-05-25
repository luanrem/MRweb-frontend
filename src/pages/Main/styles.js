import styled from 'styled-components';

import Goodtimes from '../../assets/fonts/goodtimesrg.ttf';

export const Header = styled.header`
    position: fixed;
    top: 10px;
    left: 0;
    bottom: 0;
    right: 0;

    margin: 0 auto;

  .outer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 2000;

    .home {
      color: white;
      text-decoration: none;
      padding-left: 20px;
    }

    Button {
      color: white;
      margin-right: 20px
    }
  }
`;

export const Titulo = styled.h1`
  list-style: none;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;

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

export const Banner = styled.div`
  background-image: url(${props => props.img});

  height: 400px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  max-width: 2000px;
  margin: 0px auto;
  /*border-radius: ${props => props.br ? `0 0 0 80% / 25%` : `0`};*/

  display: flex;
  justify-content: center;
  align-items: center;

    @font-face {
      font-family: 'MRFont';
      src: url(${Goodtimes});
    }

  h1 {
    font-family: MRFont;
    font-size: 70px;
    color: white;
  }


`;

export const ContentOne = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 2000px;


  #QuemSomosNos {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;

    h1 {
      font-size: 30px;
      padding-top: 40px;
    }

    hr {
      display: block;
      height: 4px;
      border-width: 0;
      color: #eee;
      background-color: rgba(199,199,199,1);
      width: 650px;

      max-width: 50px;
      margin-top: 25px;
      margin-bottom: 20px;
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 900px;
      padding: 20px 15px 50px;

      p {
        width: 400px;
        margin-left: 50px;
        font-size: 20px;
        line-height: 1.5;
        color: #696969;
      }

      img {
        width: 300px;
      }
    }

  }
`;

export const ContentTwo = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 2000px;

  padding: 50px 20px;

  .nossaMeta {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;

    h1 {
      font-size: 30px;
      padding-top: 40px;
    }
  }

  hr {
      display: block;
      height: 4px;
      border-width: 0;
      color: #eee;
      background-color: rgba(199,199,199,1);
      width: 650px;

      max-width: 50px;
      margin-top: 25px;
      margin-bottom: 20px;
    }

  .quadros {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-family: Georgia, 'Times New Roman', Times, serif;

    h3 {
      font-size: 23px;
      padding: 15px;
      padding-top: 25px;
    }

    .quadro {

      ul {
        list-style-type: circle;
      }
      li {
          width: 800px;
          margin-left: 15px;
          font-size: 20px;
          line-height: 1.5;
          color: #696969;
      }

      h2 {
        font-size: 23px;
        line-height: 1.5;

        padding-top: 10px;
      }

    }

  }
`;
