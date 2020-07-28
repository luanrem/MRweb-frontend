import React from 'react';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from "@material-ui/core/Drawer";
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import Gallery from '../../components/carousel/carousel';

import { Header,
          Menus,
          MenuListItem,
          Banner,
          QuemSomosNosContent,
          NossaMetaContent,
          ComoParticiparContent,
          GaleriaAtividadesContent,
          Footer
        } from './styles';

import { RiHome2Line } from 'react-icons/ri';
import { FaFacebookSquare, FaYoutube, FaInstagram } from 'react-icons/fa';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import banner from '../../assets/pictures/universe-banner.jpg';
import banner2 from '../../assets/pictures/universe-banner2.jpg'
import banner3 from '../../assets/pictures/universe-banner3.jpg'
import banner4 from '../../assets/pictures/universe-banner4.jpg'
import banner5 from '../../assets/pictures/universe-banner5.jpg'
import logo from '../../assets/pictures/logo.gif'
import comoParticiparFoto from '../../assets/pictures/como-participar.jpg'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  list: {
    "text-decoration": 'none',
    color: 'inherit',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: 30,
    },
    drawer: {
      width: 0,
      flexShrink: 0,
    },
  },
}));


export default function Main() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [hbackground, setHbackground] = useState(0);

  const menuItems = ['Quem somos nós', 'Nossa Meta', 'Como Participar', 'Galeria de atividades', 'Contato']
  const menuRef = ['#QuemSomosNosC', '#NossaMeta', '#ComoParticipar', '#GaleriaDeAtividades', '#Contato']

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 350 ? setHbackground(true) : setHbackground(false);
    }
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>

      {/* -----------------------HEADER---------------------- */}

      <Hidden mdDown>
        <Header headerBackground={hbackground}>
          <div className="outer">

            <div className="home">
              <a href="#banner-top"><RiHome2Line size={26} /></a>
            </div>

            <Menus headerBackground={hbackground}>
              <li><a href="#QuemSomosNosC">Quem somos nós</a></li>
              <li><a href="#NossaMeta">Nossa Meta</a></li>
              <li><a href="#ComoParticipar">Como Participar</a></li>
              <li><a href="#GaleriaDeAtividades">Galeria de atividades</a></li>
              <li><a href="#Contato">Contato</a></li>
            </Menus>

            <div className="buttons">
              <Link to="/register">
                <Button className="Cadastrar">
                  Cadastrar
              </Button>
              </Link>

              <Link to="/login">
                <Button variant="outlined" color="inherit" className={classes.button}>
                  Entrar
              </Button>
              </Link>
            </div>

          </div>
        </Header>
      </Hidden>

      <Hidden lgUp>
        <Header headerBackground={hbackground}>
          <div className="outer smallMenu">

            <div className="home smallIcon">
              <IconButton>
                <a href="#banner-top"><RiHome2Line size={30} /></a>
              </IconButton>
            </div>


            <div className="home smallIcon">
              <IconButton onClick={handleDrawerOpen} >
                <MenuIcon size={30} />
              </IconButton>
            </div>

          </div>
        </Header>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>

            <Divider />

            <List className={classes.list}>
              {menuItems.map((text, index) => (
                <ListItem button key={text}>
                  <MenuListItem onClick={handleDrawerClose} className="list"
                    href={menuRef[index]}>
                    <ListItemText primary={text} />
                  </MenuListItem>
                </ListItem>
              ))}
            </List>


          </div>

        </Drawer>
      </Hidden>

      <Banner id="banner-top" img={banner} br>

        <h1 className="nomeSite">Missão Rama Brasil</h1>

      </ Banner>


      {/* -----------------------QUEM SOMOS NÓS---------------------- */}


      <QuemSomosNosContent id="QuemSomosNosC">

        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <h1>Quem somos nós</h1>
          </Grid>

          <hr />

          <Grid item xs={12} container spacing={0} justify="center" alignItems="center">
            <Grid item xs={9} md={4} className="image" >
              <img src={logo} alt="logoImage" />
            </Grid>
            <Grid item xs={9} md={4} className="text">
              <p>Somos um grupo de pessoas que dedica suas vidas a realizar um Programa de Treinamento para que nos tornemos Cidadãos Cósmicos, aperfeiçoando-nos a cada dia, para conquistarmos a internalização da Ética Universal</p>
            </Grid>
          </Grid>

        </Grid>

      </QuemSomosNosContent>

      <Banner img={banner2} />


      {/* -----------------------NOSSA META---------------------- */}


      <NossaMetaContent id="NossaMeta">
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <h1>Nossa meta</h1>
          </Grid>

          <hr />

          <Grid item md={8} xs={11} className="content">
            <h2>Âmbito pessoal:</h2>
            <ul>
              <li>Conhecimento e o autoconhecimento como meios de alquimiar as barreiras ( o que nos tem impedido de amar) que impedem a evolução rumo à conquista da consciência positiva; </li>
              <li>Desenvolvimento de habilidades para o viver em harmonia.</li>
            </ul>
          </Grid>

          <Grid item md={8} xs={11} className="content">
            <h3>Objetivos a serem alcançados pelo grupo:</h3>
          </Grid>

          <Grid item md={8} xs={11} className="content">
            <h2>Geral:</h2>
            <ul>
              <li>Estabelecimento de uma comunidade compromissada com as regras da vida e com a promoção do bem comum, tendo o respeito e o amor como metas coletivas. A partir desta conquista, desenvolver habilidades para viver em harmonia.</li>
            </ul>
          </Grid>

          <Grid item md={8} xs={11} className="content">
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
          </Grid>

        </Grid>

      </NossaMetaContent>

      <Banner img={banner3} />


      {/* -----------------------COMO PARTICIPAR---------------------- */}


      <ComoParticiparContent id="ComoParticipar">
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <h1>Como participar</h1>
          </Grid>

          <hr />

          <Grid item container spacing={3} xs={11} alignItems="center" justify="center">
            <Grid item md={5} xs={11} className="image">
              <img src={comoParticiparFoto} alt="ComoParticiparFoto" />
            </Grid>

            <Grid item md={7} xs={12} className="text">
              <ul>
                <li>Inicialmente, faz-se necessário ler o livro: "Os Semeadores de Vida" de C.R.P.Wells.</li>
                <li>Esse livro contêm um importante histórico de nosso trabalho que se iniciou através do contato dos Seres Extra-terrestres com a família deste autor, e que,depois, se diversificou pelo mundo com grupos utilizando metodologias de trabalho diferentes, mas com o mesmo objetivo. Através desta leitura, você poderá ou não se identificar com o objetivo a ser alcançado. Por este motivo, a leitura se torna fundamental!</li>
                <li>O segundo passo é escrever um e-mail para a coordenação falando se seu interesse, através do endereço contato@missaorama.com.br ou envie mensagem para o WhatsApp 31.98882.9997. Receberá todas as instruções e será direcionado para um grupo de trabalho em sua cidade.</li>
                <li>Seja muito bem-vindo(a)!</li>
                <li>Coordenação Missão Rama Brasil</li>
              </ul>
            </Grid>

          </Grid>

          <hr />

        </Grid>
      </ComoParticiparContent>

      <Banner img={banner4} />


      {/* -----------------------GALERIA DE ATIVIDADES---------------------- */}

      <GaleriaAtividadesContent id="GaleriaDeAtividades">
      <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <h1>Galeria de atividades</h1>
          </Grid>

          <hr />

          <Grid item xs={12} className="caruosel">
            <Gallery />
          </Grid>

      </Grid>

      </GaleriaAtividadesContent>


      {/* -----------------------CONTATO---------------------- */}

      <Banner img={banner5} contact={true} id="Contato" >
        <div className="contatoContent">
          <h1>Faremos Contato</h1>

          <hr />

          <form className={classes.root} noValidate autoComplete="off">
            <div className="formsContent">
              <TextField id="Name"
                margin="normal"
                size="Small"
                label="Nome"
                required
                fullWidth
              />
              <TextField id="Email" label="E-mail" />
              <TextField id="whatsapp" label="WhatsApp"
                required
                style={{ marginTop: 7 }} />

              <TextField id="Mensagem" label="Mensagem"
                variant="outlined"
                multiline
                rows={5}
                rowsMax={5}
                style={{
                  marginTop: 30,
                  marginBottom: 20
                }}
              />
            </div>

            <div className="enviar">
              <Button variant="outlined" color="inherit" className={classes.button}>
                Enviar
              </Button>
            </div>


          </form>
        </div>
      </Banner>

      <Footer className="completar">

        <div className="iconsLinked">
          <a className="social-padding"
            href="https://www.facebook.com/ramabrasil">
            <FaFacebookSquare size={40} />
          </a>
          <a className="social-padding"
            href="https://www.youtube.com/channel/UChCB5Kj0wvr-KgmtLUHwhTw">
            <FaYoutube size={40} />
          </a>
          <a className="social-padding"
            href="https://www.instagram.com/missaorama">
            <FaInstagram size={40} />
          </a>
        </div>

        <span className="text-primary">Missão Rama do Brasil &copy;</span>

      </Footer>




    </>
  );
}
