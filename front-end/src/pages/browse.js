import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BrowseClassCard from '../components/BrowseClassCard';
import Navigation from '../components/Navigation';
import Head from 'next/head';
import axios from 'axios';

function BrowseClasses({ classes }) {
  return (
    <div>
      <div className="mx-auto mt-20 max-w-screen-lg p-4">
        <div className="mt-12 grid h-1/3 grid-cols-[repeat(4,_minmax(200px,_1fr))] gap-4">
          {classes.map((classCard) => (
            <BrowseClassCard
              key={classCard.classCode}
              classCode={classCard.classCode}
              name={classCard.name}
              color={classCard.color}
              hover={classCard.hover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(process.env.API_URL + '/classes');
  const classes = await res.data;
  return { props: { classes } };
};

BrowseClasses.propTypes = {};
export default BrowseClasses;
