import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import { Layout } from '../components';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  );
}

export default MyApp;