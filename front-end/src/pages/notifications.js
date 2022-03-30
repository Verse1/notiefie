import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Notification  from '../components/Notification';


const Notifications = () => {
  const [notifications, setNotifs] = useState([
    {
      id: 1,
      title: 'Jordan liked your note!',
      date: '4 days ago',
    },
    {
      id: 2,
      title: 'You added the class "Introduction to Computer Science"!',
      date: '5 days ago',
    },
    {
      id: 3,
      title: 'Chris commented on your note!',
      date: '1 week ago',
    },
    {
      id: 4,
      title: 'Your note was removed by an admin!',
      date: '2 weeks ago',
    },
    {
      id: 5,
      title: 'Your comment was upvoted!',
      date: '2 weeks ago',
    },
    {
      id: 6,
      title: 'You reached 200 total upvotes! Congratulations!',
      date: '3 weeks ago',
    },
  ]  )
  return (
    <>
      {notifications.map((notif) => (
        <Notification key={notif.id } notif={notif} />
      ))}
    </>
  );
}

//Notifications.propTypes = {};
export default Notifications;