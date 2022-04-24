import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import ClassCard from '../components/ClassCard';

export default function Home({ userClasses }) {
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
      console.log(user);

      axios
        .post('http://localhost:3001/api/users/create', {
          name: user.name,
          email: user.email,
          university: 'New York University',
          picture: user.picture,
        })
        .then((res) => {
          console.log('res', res.data);
        })
        .catch((err) => {
          console.log('error in request', err);
        });
    }
  }, [user, isAuthenticated]);

  const [classes, setClasses] = useState(userClasses);

  return (
    <div className="grid place-items-center">
      {classes.length === 0 ? (
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
        classes
          .sort((a, b) => a.order - b.order)
          .map((classCard) => (
            <Link href={`/classes/${classCard.id}`} passHref key={classCard.id}>
              <ClassCard
                key={classCard.id}
                id={classCard.id}
                title={classCard.name}
                description={classCard.description}
                enrolled={classCard.enrolled}
                num={classCard.num}
                order={classCard.order}
                changeOrder={changeOrder}
              />
            </Link>
          ))
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  const userClasses = [];

  try {
    const res = await axios.get(
      'http://localhost:3001/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6'
    );
    userClasses = await res.data.classes;
  } catch (err) {}
  return { props: { userClasses } };
};
