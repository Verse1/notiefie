import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BrowseClassCard from '@/components/BrowseClassCard';
import Navigation from '@/components/Navigation';
import Head from 'next/head';

function BrowseClasses(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Notiefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <div className='relative mt-40 content-center'>
        <BrowseClassCard/>
      </div>

      
    </div>
  );
}

BrowseClasses.propTypes = {};
export default BrowseClasses;