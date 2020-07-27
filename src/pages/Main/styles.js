import styled from 'styled-components';

import Goodtimes from '../../assets/fonts/goodtimesrg.ttf';


export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 50px;
    z-index: 1;

    margin: 0 auto;
    transition: 0.5s;
    background: ${props => props.headerBackground === true ? "white" : "transparent"};
    box-shadow: ${props => props.headerBackground === true ? "0 1px 3px black" : "none"};

  .outer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  max-width: 2000;
  height: 100%;

    .home {
      padding: 0 20px;

      a {
        text-decoration: none;
        color: ${props => props.headerBackground === true ? "black" : "white"};
      }
    }

    .smallIcon {
      padding: 0 50px;
    }


    Button {
      color: ${props => props.headerBackground === true ? "black" : "white"};
      margin-right: 20px;
      margin-left: 0;
      text-decoration: inherit;
    }
    .Cadastrar{
      margin-right: 10px;
    }
  }
`;

export const Menus = styled.h1`
  list-style: none;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: 0.3s;
  color: ${props => props.headerBackground === true ? "black" : "white"};

  margin-left: 100px;

  li {
    display: inline-block;
    padding: 0px 20px;
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

  li a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.headerBackground === true ? "black" : "white"};
    transition: width .4s;
  }

  li a:hover::after {
    width: 100%;
    transition: width .4s;
  }
`;

export const Banner = styled.div`
  background-image: url(${props => props.img});

  height: ${props => props.contact === true ? "700px" : "400px"};

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

  .contatoContent {
    width: auto;
    height: auto;
    background: white;
    border-radius: 10px;


    h1 {
      font-size: 30px;
      color: black;
      padding: 20px 100px;
      margin: 0 auto;
    }

    hr {
      display: block;
      height: 4px;
      border-width: 0;
      color: #eee;
      background-color: rgba(199,199,199,1);
      width: 650px;
      margin: 0 auto;

      max-width: 50px;
      margin-top: 25px;
      margin-bottom: 1px;
    }

    .formsContent {
      display: flex;
      flex-direction: column;
      padding: 0px 40px;

      #Mensagem {
        padding: 15px 0 5px 0;
      }
    }

    .enviar {
      display: flex;
      justify-content: flex-end;

      margin: 0;
      padding: 0 40px 20px;
    }
  }

`;

export const ContentOne = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 2000px;


  .QuemSomosNos {
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
        list-style-type: none;
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


    #imagemETexto {
      display: flex;
      align-items: center;


      img {
        width: auto;
        height: 450px;
        margin-right: 20px;
        border-radius: 10px;
      }

      .quadroParticipar li{
        width: 500px;
      }
    }


`;

export const ContentThree = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 700px;
  max-width: 2000px;

  padding: 50px 20px;

  .galeriaAtividades {
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
`

export const Footer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 30px;
  max-width: 2000px;

  padding: 50px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .iconsLinked {
    padding: 20px 0;
    a {
        text-decoration: none;
        color: #222;
        margin: 15px;
      }
  }
`

export const MenuListItem = styled.a`
    text-decoration: none;
    color: inherit;
    padding: 0 25px;
`;
