import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function BrowseClasses(props) {
  const router = useRouter();

  return (
    <div>
      <h1>BrowseClasses Page!</h1>
    </div>
  );
}

BrowseClasses.propTypes = {};
export default BrowseClasses;