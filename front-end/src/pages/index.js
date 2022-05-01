import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import ClassCard from '../components/ClassCard';

axios.defaults.withCredentials = true;

export default function Home({ userClasses }) {
  const [classes, setClasses] = useState([]);

  const { isAuthenticated, loginWithPopup, logout, loginWithRedirect, user } =
    useAuth0();

  const changeOrder = (e) => {
    const pinnedClass = classes.find((classCard) => classCard.id === e);

    const newClassesState = classes.map((classCard) => {
      if (classCard.id === pinnedClass.id) {
        classCard.order *= -1;
      }
      return classCard;
    });

    setClasses(newClassesState);
  };

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .post('http://localhost:3001/api/users/create', {
          name: user.name,
          email: user.email,
          university: 'New York University',
          picture: user.picture,
        })
        .then((res) => {})
        .catch((err) => {
          console.log('error in request', err);
        });
    }
  }, [user, isAuthenticated]);

  return (
    <div className="grid place-items-center">
      {userClasses && userClasses.length < 1 ? (
        <div className="mt-20 text-center">
          <h1 className="text-3xl font-bold">
            You don&apos;t have any classes yet.
          </h1>
          <Link href="/browse">
            <a className="text-blue-500">
              <h1 className="text-3xl font-bold">Click here to add some!</h1>
            </a>
          </Link>
        </div>
      ) : (
        userClasses
          .sort((a, b) => a.order - b.order)
          .map((classCard) => (
            <Link href={'classes/' + classCard._id} passHref key={classCard.id}>
              <a>
                <ClassCard
                  key={classCard._id}
                  id={classCard._id}
                  title={classCard.className}
                  description={classCard.description}
                  enrolled={classCard.numEnrolled}
                  num={classCard.classCode}
                  order={classCard.order}
                  changeOrder={changeOrder}
                />
              </a>
            </Link>
          ))
      )}
    </div>
  );
}

export const getServerSideProps = async ({ req }) => {
  let userClasses = [];
  try {
    const res = await axios.get(
      'http://api:3001/api/users/user/classes',

      {
        headers: {
          Cookie: req.headers.cookie,
        },
      }
    );
    userClasses = await res.data;
  } catch (err) {
    console.log(err);
  }
  return { props: { userClasses } };
};
