import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/Navigation.css';
import Navigation from '../components/Navigation';
import NewSearch from '../components/NewSearch';
import { Auth0Provider } from "@auth0/auth0-react";
import { config } from 'process';

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider 
      audience={config.AUTH_AUDIENCE}
      domain={config.AUTH0_ISSUER_BASE_URL}
      clientId={config.AUTH0_CLIENT_ID}
      redirectUri={config.AUTH0_BASE_URL}>
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
