import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BrowseClassCard from '@/components/BrowseClassCard';
import Navigation from '@/components/Navigation';
import SelectClass from '@/components/ClassSelector';
import Head from 'next/head';
import { classes } from '@/utils/testData';


function BrowseClasses(props) {
  const router = useRouter();

  return (
    <div>
      <div className="mx-auto mt-20 max-w-screen-lg p-4">
        <div className="w-full">
          <SelectClass classes={classes} />
        </div>
        <div className="mt-12 grid h-1/3 grid-cols-[repeat(4,_minmax(200px,_1fr))] gap-4">
          {classes.map((c, i) => (
            <BrowseClassCard
              key={i.toString()}
              classCode={c.classCode}
              name={c.name}
              color={c.color}
              hover={c.hover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

BrowseClasses.propTypes = {};
export default BrowseClasses;
