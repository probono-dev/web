import Document, { Html, Main, NextScript } from 'next/document';

class ProBonoDocument extends Document {
  public render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default ProBonoDocument;
