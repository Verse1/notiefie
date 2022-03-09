import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function Navigation(props) {
  const router = useRouter();
    
  return(
    <div className='bg-indigo-400 border-purple-300 border-solid max-w-7xl px-2 sm:px-6 lg:px-8'>
      <a to='/'>Home</a>
      <a to='/'>Upload</a>
      <a to='/'>Browse</a>
      <a to='/'>Notifications</a>
    </div>
  )
}


Navigation.propTypes = {};
export default Navigation