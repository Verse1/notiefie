import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function Notifications(props) {
  const router = useRouter();

  return (
    <div>
      <h1>Notifications Page!</h1>
    </div>
  );
}

Notifications.propTypes = {};
export default Notifications;
