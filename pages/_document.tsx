import Document, { Html, Head, Main, NextScript } from 'next/document';

import { Favicons } from '../components/Favicons';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicons />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
