import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import '../styles/globals.css';
import '../styles/Navigation.css';
import Navigation from '../components/Navigation';
import NewSearch from '../components/NewSearch';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Notiefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <NewSearch />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
