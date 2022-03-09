import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function Navigation(props) {
  const router = useRouter();
    
  return(
    <div className='bg-indigo-400 border-purple-300 border-solid container flex flex-wrap justify-between items-center mx-auto'>
      <a to='/'>Home</a>
      <a to='/'>Upload</a>
      <a to='/'>Browse</a>
      <a to='/'>Notifications</a>
    </div>
  )
}


Navigation.propTypes = {};
export default Navigation