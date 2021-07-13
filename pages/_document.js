import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static getInitialProps( {  renderPage } ) {
    const page = renderPage();

    return {
        ...page,
      };
  }

  render() {
    return (
      <Html lang="en">
        <Head >
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href="/static/fonts/hindVadodara/HindVadodara-Regular.ttf" as="font" crossOrigin="" /> 
          <link rel="preload" href="/static/fonts/hindVadodara/HindVadodara-SemiBold.ttf" as="font" crossOrigin="" /> 
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