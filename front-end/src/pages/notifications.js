import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Notification from '../components/Notification';
import axios from 'axios';


const Notifications = (notifications) => {
  return (
    <>
      {notifications.notifications.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </>
  );
};

Notifications.propTypes = {};
export default Notifications;

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:3001/api/notifications/');
  const notifications = await res.data;
  return { props: { notifications } };
};