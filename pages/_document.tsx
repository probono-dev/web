import Document, { Html, Head, Main, NextScript } from 'next/document';
import { collect } from 'linaria/server';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const {html} = initialProps;


    return { ...initialProps };
  }

  getCssLinks () {
    console.log(this.context._documentProps)
    return null;
  }

  render() {
    return (
      <Html>
        <Head>
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
