import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function Navigation(props) {
  const router = useRouter();
    
  return(
    <div className="relative h-32 w-32">
      <div className='bg-indigo-400 border-purple-300 border-solid sticky top-0 z-50'>
        <a to='/'>Home</a>
        <a to='/'>Upload</a>
        <a to='/'>Browse</a>
        <a to='/'>Notifications</a>
      </div>
    
    </div>
  )
}


Navigation.propTypes = {};
export default Navigation