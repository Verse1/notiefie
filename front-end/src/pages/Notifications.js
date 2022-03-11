import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function Notifications(props) {
  const router = useRouter();

  return(
    <div>
        <hi>Notifications Page!</hi>
    </div>
  );
}

Notifications.propTypes = {};
export default Notifications
