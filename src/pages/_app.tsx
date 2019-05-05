import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import { TypographyStyle } from 'react-typography';

import typography from '../style/theme';

import 'typeface-nunito';
import 'typeface-rubik';
import '../global.css';

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <TypographyStyle typography={typography} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
