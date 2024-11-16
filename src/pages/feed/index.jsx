import React from 'react';
import { Card } from '../../components/Card'; // Componente de cartão (conteúdo do feed)
import { UserInfo } from '../../components/UserInfo'; // Componente de informações do usuário
import { Header } from '../../components/Header'; // Cabeçalho da página

import { Container, Column, Title, TitleHighlight } from './styles'; // Estilos específicos da página

const Feed = () => {
  return (
    <>
      {/* Cabeçalho com autenticação ativa */}
      <Header autenticado={true} />

      <Container>
        {/* Coluna principal - Feed de conteúdos */}
        <Column flex={3}>
          <Title>Feed</Title>

          {/* Renderiza múltiplos cards (simulados) */}
          {[...Array(10)].map((_, index) => (
            <Card key={index} />
          ))}
        </Column>

        {/* Coluna secundária - Ranking de usuários */}
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>

          {/* Renderiza as informações dos usuários com um loop */}
          {[
            { nome: "Pablo Henrique", image: "https://avatars.githubusercontent.com/u/45184516?v=", percentual: 25 },
            { nome: "Pablo Henrique", image: "https://avatars.githubusercontent.com/u/45184516?v=", percentual: 65 },
            { nome: "Pablo Henrique", image: "https://avatars.githubusercontent.com/u/45184516?v=", percentual: 45 },
            { nome: "Pablo Henrique", image: "https://avatars.githubusercontent.com/u/45184516?v=", percentual: 72 },
          ].map((user, index) => (
            <UserInfo
              key={index} // Sempre adicionar uma chave única ao iterar
              nome={user.nome}
              image={user.image}
              percentual={user.percentual}
            />
          ))}
        </Column>
      </Container>
    </>
  );
};

export { Feed };
