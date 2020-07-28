import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Content } from './styles';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().min(6, 'No mínimo 6 caracteres').required('A senha é obrigatória'),
});

export default function SignIn() {
  const classes = useStyles();

  function handleSubmit(data) {
    console.tron.log(data);
    console.log(data);
  }

  return (
    <Content>


      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Form schema={schema} className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={1} direction="column">
              <Grid item xs={12}>
                <Input name="email" type="email" placeholder="E-mail" />
              </Grid>

              <Grid item xs={12}>
                <Input name="password" type="password" placeholder="Senha" />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Continuar conectado"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Entrar
            </Button>
              </Grid>
            </Grid>



            <Grid container spacing={4} direction="column">
              <Grid item container justify="space-between">
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Esqueceu a senha?
                </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Ainda não tem conta? Cadastre-se"}
                  </Link>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item />
                <Grid item >
                  <Link href="/" variant="body2">
                    {"Página inicial"}
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        </div>
      </Container>

    </Content>
  );
}
