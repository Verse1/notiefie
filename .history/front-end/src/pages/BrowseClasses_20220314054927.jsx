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
      <div class="max-w-screen-lg mx-auto p-4 mt-20">
        <div class="grid grid-cols-2 gap-4 mt-12">
          <BrowseClassCard/>
          <BrowseClassCard/>
          <BrowseClassCard/>
          <BrowseClassCard/>
        </div>
      </div>

      
    </div>
  );
}

BrowseClasses.propTypes = {};
export default BrowseClasses;