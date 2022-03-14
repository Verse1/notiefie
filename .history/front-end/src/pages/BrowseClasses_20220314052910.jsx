import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BrowseClassCard from '@/components/BrowseClassCard';
import Navigation from '@/components/Navigation';

function BrowseClasses(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Notiefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <h1>Browse Classes Page!</h1>

      <BrowseClassCard/>
    </div>
  );
}

BrowseClasses.propTypes = {};
export default BrowseClasses;