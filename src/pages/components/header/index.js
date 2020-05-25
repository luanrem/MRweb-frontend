import React from 'react';

import { GoSearch } from 'react-icons/ri';

import Profile from '../profile';

import { Container, Titulo } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="search">
      <GoSearch size={26} />
      </div>

      <Titulo>
        <li><a>Quem somos nós</a></li>
        <li><a>Como Participar</a></li>
        <li><a>Nossa Meta</a></li>
        <li><a>Galeria de atividades</a></li>
        <li><a>Contato</a></li>
      </Titulo>

      <Profile />

    </ Container>
  );
}
