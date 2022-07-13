import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.scss'; 
import { Layout } from '../components';
import Head from "next/head";
import { CookiesProvider } from "react-cookie"
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag('config', '[UA-99077717-1]', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  );
}

export default MyApp;