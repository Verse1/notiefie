import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/Navigation.css';
import Navigation from '../components/Navigation';
import NewSearch from '../components/NewSearch';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <title>Notiefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <NewSearch />

      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
