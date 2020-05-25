import React from 'react';

import perfil from '../../../assets/pictures/perfil.jpg';

import { Container } from './styles';

export default function profile() {
  return (
      <Container>
        <ul className="nomefuncao">
          <li className="nome" >Luan Roberto Estrada Martins</li>
          <li className="funcao">Facilitador</li>
        </ul>
        <a>
        <img src={perfil}/>
        </a>
      </Container>
  );
}
