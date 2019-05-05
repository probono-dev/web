import Document, { Html, Main, NextScript, Head } from 'next/document';

class ProBonoDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ProBonoDocument;
