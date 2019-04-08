import React from 'react';
import { styled } from 'linaria/react';
import { scale, rhythm } from '../style/theme';
import Link from 'next/link';

import Logo from '../components/Logo';
import Head from 'next/head';

const Main = styled.main`
  max-width: 34.8rem;
  margin: auto;
  padding-top: ${rhythm(5)};
`;

const SiteHeader = styled.h1`
  ${scale(2)};
  margin-bottom: ${rhythm(5)};
  margin-top: 0;
  text-align: center;
`;

const SiteLink = styled.a`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Text = styled.p`
  ${scale(0.3)};
  text-align: center;
  margin-top: ${rhythm(5)};
  margin-bottom: ${rhythm(5)};
`;

const Headline = styled.p`
  ${scale(1)};
  text-align: center;
  margin-top: ${rhythm(5)};
  margin-bottom: ${rhythm(5)};
`;

export default () => (
  <>
    <Head>
      <title>Connect with ProBono</title>
    </Head>
    <Main>
      <SiteHeader>
        <Link href={`/`}>
          <SiteLink>
            <Logo />
          </SiteLink>
        </Link>
      </SiteHeader>
      <Text>
        Help us help thousands of organisations around the world make a
        difference.
      </Text>
      <Headline>
        Meet <b>ProBono</b>!
      </Headline>
      <Text>
        Our mission is to connect developers with charitable and non-profit
        organisations.
      </Text>
      <Headline>How?</Headline>
      <Text>
        From its release, ProBono will provide a platform where developers can
        find projects by well-known and respected organisations. We'll provide
        you with the necessary tools and knowledge to donate your time to these
        projects and help make <b>Our World a better place.</b>
      </Text>
      <Headline>Get involved!</Headline>
      <Text>
        <b>Tell your friends</b> about ProBono
      </Text>
      <Text>
        See if you can <b>help out</b> on our{' '}
        <a href="https://www.github.com/probono-dev">GitHub</a>
      </Text>
      <Text>
        If you're part of an organisation or service that can help,{' '}
        <b>reach out!</b>
      </Text>
      <Text>With your help we could get there much sooner!</Text>
      <Text>
        Oh, and also check out the{' '}
        <a href="https://blog.probono.dev">ProBono Blog</a>
      </Text>
    </Main>
  </>
);
