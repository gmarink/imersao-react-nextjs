/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import TagMeta from '../src/components/Meta';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 50px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const name = React.useState('');
  return (

    <QuizBackground backgroundImage={db.bg}>
      <TagMeta title={db.title} description={db.description} url={db.url} bgimage={db.bg} />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            {/* eslint-disable-next-line func-names */}
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('subimit');
            }}
            >
              <input
                // eslint-disable-next-line func-names
                onChange={function (infosDoEvento) {
                  // eslint-disable-next-line no-unused-expressions

                  console.log(infosDoEvento.target.value);
                  name = infosDoEvento.target.value;
                }}
                placeholder="Digite seu nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
