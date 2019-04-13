import React from 'react';
import { styled } from 'linaria/react';
import Div from 'react-div-100vh';
import Logo from '../components/AnimatedLogo';
import Link from 'next/link';
import Head from 'next/head';

const Container = styled(Div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Headline = styled.h1`
  font-size: 3em;
`;

export default () => (
  <>
    <Head>
      <title>ProBono</title>
    </Head>
    <Container>
      <Logo width="10em" height="12em" />
      <Headline>ProBono</Headline>
      <p>Connecting charitable talent with causes in need.</p>
      <p>
        <Link href="/connect">
          <a href="/connect">See How</a>
        </Link>{' '}
        or <a href="https://blog.probono.dev">Read the Blog</a>
      </p>
    </Container>
  </>
);
