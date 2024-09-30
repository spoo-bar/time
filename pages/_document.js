import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#111111" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#111111" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-icon" sizes="256x256" href="/icons/icon-256x256.png" />
          <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png" />

          <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="mask-icon" href="/icons/icon-16x16.svg" color="#111111" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MG95F11NJH');
              `
            }}
          />
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
