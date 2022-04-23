import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/Navigation.css';
import Navigation from '../components/Navigation';
import NewSearch from '../components/NewSearch';
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider 
      domain={process.env.AUTH0_ISSUER_BASE_URL}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={process.env.AUTH0_BASE_URL}>
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
