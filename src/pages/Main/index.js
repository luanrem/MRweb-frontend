import React from 'react';

import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Header, Titulo, Banner, ContentOne, ContentTwo } from './styles';

import {RiHome2Line  } from 'react-icons/ri';

import banner from '../../assets/pictures/universe-banner.jpg';
import banner2 from '../../assets/pictures/universe-banner2.jpg'
import banner3 from '../../assets/pictures/universe-banner3.jpg'
import banner4 from '../../assets/pictures/universe-banner4.jpg'
import banner5 from '../../assets/pictures/universe-banner5.jpg'
import logo from '../../assets/pictures/logo.gif'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


export default function Main() {
  const classes = useStyles();

  const [hbackground, setHbackground] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 350 ? setHbackground(true) : setHbackground(false);
    }
  }, [])

  return (
    <>
      <Header headerBackground={hbackground}>
        <div className="outer">

          <div className="home">
            <a href="#"><RiHome2Line size={26} /></a>
          </div>

          <Titulo headerBackground={hbackground}>
            <li><a>Quem somos nós</a></li>
            <li><a>Como Participar</a></li>
            <li><a>Nossa Meta</a></li>
            <li><a>Galeria de atividades</a></li>
            <li><a>Contato</a></li>
          </Titulo>

          <Button variant="outlined" color="inherit" className={classes.button}>
            Entrar
          </Button>

        </div>
      </Header>

      <Banner id="banner-top" img={banner} br>
        <h1 className="nomeSite">Missão Rama Brasil</h1>

      </ Banner>


    <ContentOne >

      <div id="QuemSomosNos">
        <h1>Quem somos nós</h1>

        <hr/>

        <div className="content">
          <img src={logo}/>
          <p>Somos um grupo de pessoas que dedica suas vidas a realizar um Programa de Treinamento para que nos tornemos Cidadãos Cósmicos, aperfeiçoando-nos a cada dia, para conquistarmos a internalização da Ética Universal</p>
        </div>
      </div>
    </ContentOne>

    <Banner img={banner2} />

    <ContentTwo className="completar">
      <div className="nossaMeta">
        <h1>Nossa meta</h1>
        <hr/>
      </div>

      <div className="quadros">

        <div className="quadro">
          <h2>Âmbito pessoal:</h2>
          <ul>
            <li>Conhecimento e o autoconhecimento como meios de alquimiar as barreiras ( o que nos tem impedido de amar) que impedem a evolução rumo à conquista da consciência positiva; </li>
            <li>Desenvolvimento de habilidades para o viver em harmonia.</li>
          </ul>
        </div>

        <h3>Objetivos a serem alcançados pelo grupo:</h3>

        <div className="quadro">
          <h2>Geral:</h2>
          <ul>
            <li>Estabelecimento de uma comunidade compromissada com as regras da vida e com a promoção do bem comum, tendo o respeito e o amor como metas coletivas. A partir desta conquista, desenvolver habilidades para viver em harmonia.</li>
          </ul>
        </div>

        <div className="quadro">
          <h2>Específicos:</h2>
          <ul>
            <li>Servir de referencial ao meio, tanto de forma grupal, quanto individual;</li>
            <li>Atuar na sociedade, gerando a partir dessas atividades, reflexão sobre a vida e tudo o que ela representa;</li>
            <li>Reunir e organizar o conhecimento necessário para criar uma sociedade auto-sustentada;</li>
            <li>Manter, desenvolver e aprimorar o próprio grupo preparando sempre novos Semeadores para servir ao Propósito da Confederação, estando sempre recebendo o acréscimo de novos participantes;</li>
            <li>Conquistarmos o contato com outras sociedades extra-terrestres a partir da Convivência harmônica entre nós (Encontrem-se e nos encontrarão");</li>
            <li>Investir em experiências em campos mais sutis, em atividades transcendentais e paranormais passando a considerar a existência multidimensional do Ser;</li>
            <li>Abrir a possibilidade para uma presença extra-terrestre mais efetiva dentro do grupo, quando necessário.</li>
          </ul>
          <p>(Instruções passados por Charlie Wells em palestra no Projeto Amar em 1996)</p>
        </div>

      </div>

    </ContentTwo>


    <Banner img={banner3} />

    <ContentTwo className="completar">
        <div className="nossaMeta">
          <h1>Como participar</h1>

          <hr/>
        </div>

        <div className="quadros">
          <div className="quadro">
            <ul>
              <li>Inicialmente, faz-se necessário ler o livro: "Os Semeadores de Vida" de C.R.P.Wells.</li>
              <li>Esse livro contêm um importante histórico de nosso trabalho que se iniciou através do contato dos Seres Extra-terrestres com a família deste autor, e que,depois, se diversificou pelo mundo com grupos utilizando metodologias de trabalho diferentes, mas com o mesmo objetivo. Através desta leitura, você poderá ou não se identificar com o objetivo a ser alcançado. Por este motivo, a leitura se torna fundamental!</li>
              <li>O segundo passo é escrever um e-mail para a coordenação falando se seu interesse, através do endereço contato@missaorama.com.br ou envie mensagem para o WhatsApp 31.98882.9997. Receberá todas as instruções e será direcionado para um grupo de trabalho em sua cidade.</li>
              <li>Seja muito bem-vindo(a)!</li>
              <li>Coordenação Missão Rama Brasil</li>
            </ul>
          </div>
        </div>

    </ContentTwo>


    <Banner img={banner4} />

    <ContentTwo className="completar">
 <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis condimentum purus, eu semper libero rutrum eget. Vivamus quis lacinia lectus. Quisque vitae placerat ex. Integer congue bibendum dolor, vel venenatis ipsum consequat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus cursus nibh, et luctus nibh auctor sed. Maecenas in egestas ligula, at molestie tortor. Morbi eget risus nibh. Duis vel mi ac purus molestie ultrices. Proin sodales mauris at magna ultrices, ut laoreet odio porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nulla venenatis, maximus lacus vel, cursus lectus. Donec ornare tristique tellus eu tristique. Pellentesque non odio at dolor ullamcorper vestibulum quis eu diam.
</p>
<p>
Praesent ornare purus vel dui imperdiet condimentum. Suspendisse pharetra ante sagittis sapien vulputate consectetur. Sed egestas tempus condimentum. In hac habitasse platea dictumst. Morbi id condimentum dolor, ut auctor erat. Curabitur vestibulum varius imperdiet. Donec scelerisque placerat nibh, dapibus rutrum neque porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie, massa at efficitur tempus, risus justo tincidunt eros, at pellentesque tellus nunc eu purus. Sed ut ex lectus. Fusce tempor leo non mauris semper feugiat.
</p>
<p>
Praesent fringilla venenatis est in fringilla. Ut auctor tempus purus, sit amet iaculis nisl sagittis a. Ut vitae libero aliquet, dapibus dui laoreet, euismod nisi. In pretium eu tortor vel eleifend. Nam hendrerit porttitor ultrices. Aenean quis elementum quam. Praesent laoreet quam eu quam condimentum finibus.
</p>
<p>
Donec sit amet est et lacus accumsan suscipit. Aliquam sed augue non lorem dictum molestie. Donec urna ex, sagittis quis interdum vitae, auctor et velit. Etiam efficitur, ipsum in hendrerit bibendum, nisl lacus mattis neque, quis vestibulum ligula risus non enim. Quisque dictum vel dui cursus eleifend. Aenean id lorem placerat, finibus tortor id, blandit erat. Vivamus ac leo quis leo imperdiet accumsan. Aliquam augue turpis, iaculis sed orci in, eleifend dictum felis. Cras id massa malesuada, suscipit leo vel, vulputate velit. Praesent in feugiat augue, a hendrerit tortor.
</p>
<p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat volutpat mauris vitae scelerisque. Etiam laoreet lectus lacus, eu sagittis nulla convallis eget. Quisque cursus et justo ut tempus. Donec porttitor volutpat mauris at vulputate. Suspendisse potenti. Cras turpis est, pellentesque vel ex ut, euismod consectetur est.
</p>
    </ContentTwo>



    <Banner img={banner5} />

    <ContentTwo className="completar">
 <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis condimentum purus, eu semper libero rutrum eget. Vivamus quis lacinia lectus. Quisque vitae placerat ex. Integer congue bibendum dolor, vel venenatis ipsum consequat in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum cursus cursus nibh, et luctus nibh auctor sed. Maecenas in egestas ligula, at molestie tortor. Morbi eget risus nibh. Duis vel mi ac purus molestie ultrices. Proin sodales mauris at magna ultrices, ut laoreet odio porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nulla venenatis, maximus lacus vel, cursus lectus. Donec ornare tristique tellus eu tristique. Pellentesque non odio at dolor ullamcorper vestibulum quis eu diam.
</p>
<p>
Praesent ornare purus vel dui imperdiet condimentum. Suspendisse pharetra ante sagittis sapien vulputate consectetur. Sed egestas tempus condimentum. In hac habitasse platea dictumst. Morbi id condimentum dolor, ut auctor erat. Curabitur vestibulum varius imperdiet. Donec scelerisque placerat nibh, dapibus rutrum neque porta in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In molestie, massa at efficitur tempus, risus justo tincidunt eros, at pellentesque tellus nunc eu purus. Sed ut ex lectus. Fusce tempor leo non mauris semper feugiat.
</p>
<p>
Praesent fringilla venenatis est in fringilla. Ut auctor tempus purus, sit amet iaculis nisl sagittis a. Ut vitae libero aliquet, dapibus dui laoreet, euismod nisi. In pretium eu tortor vel eleifend. Nam hendrerit porttitor ultrices. Aenean quis elementum quam. Praesent laoreet quam eu quam condimentum finibus.
</p>
<p>
Donec sit amet est et lacus accumsan suscipit. Aliquam sed augue non lorem dictum molestie. Donec urna ex, sagittis quis interdum vitae, auctor et velit. Etiam efficitur, ipsum in hendrerit bibendum, nisl lacus mattis neque, quis vestibulum ligula risus non enim. Quisque dictum vel dui cursus eleifend. Aenean id lorem placerat, finibus tortor id, blandit erat. Vivamus ac leo quis leo imperdiet accumsan. Aliquam augue turpis, iaculis sed orci in, eleifend dictum felis. Cras id massa malesuada, suscipit leo vel, vulputate velit. Praesent in feugiat augue, a hendrerit tortor.
</p>
<p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed feugiat volutpat mauris vitae scelerisque. Etiam laoreet lectus lacus, eu sagittis nulla convallis eget. Quisque cursus et justo ut tempus. Donec porttitor volutpat mauris at vulputate. Suspendisse potenti. Cras turpis est, pellentesque vel ex ut, euismod consectetur est.
</p>
    </ContentTwo>




         </>
  );
}
