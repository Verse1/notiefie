import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/Navigation.css';
import Navigation from '../components/Navigation';
import NewSearch from '../components/NewSearch';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={'dev-z0la8at9.us.auth0.com'}
      clientId={'zFBQbnVXZGYurCRU0FatAyY3CEoeMWjP'}
      redirectUri={'http://localhost/'}>
      <Head>
        <title>Notiefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <NewSearch />

      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
