import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.scss'; 
import { Layout } from '../components';
import Head from "next/head";
import { CookiesProvider } from "react-cookie"

export default function MyApp({ Component, pageProps}) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  );
}
