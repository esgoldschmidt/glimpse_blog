import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500&display=swap" rel="stylesheet" />
            <script src="https://kit.fontawesome.com/55ad46d4ac.js" crossOrigin="anonymous"></script>
            {/* <!-- Global site tag (gtag.js) - Google v4 Analytics --> */}
            <Script 
              src="https://www.googletagmanager.com/gtag/js?id=G-CJPTDJCELL"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CJPTDJCELL');
              `}
            </Script>

            {/* <!-- Global site tag (gtag.js) - Google Univeral Analytics (legacy) --> */}
            <Script 
              src="https://www.googletagmanager.com/gtag/js?id=UA-99077717-1"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-99077717-1');
              `}
            </Script>

            <link rel='icon' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument