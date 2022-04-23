import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';

import ClassCard from '../components/ClassCard';

export default function Home({ userClasses }) {
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

  const [classes, setClasses] = useState(userClasses);

  console.log(process.env.AUTH0_SECRET);
  console.log(process.env.API_URL);

  return (
    <div className="grid place-items-center">
      {/* if user has no classes say it on the page */}

      {classes.length === 0 ? (
        <div className="text-center mt-20">
          <h1 className="text-3xl font-bold">
            You don't have any classes yet.
          </h1>
          <Link href="/browse">
            <a className="text-blue-500">
              <h1 className="text-3xl font-bold">
                Click here to add some!
              </h1>
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
      )))}
    </div>
  );
}

export const getServerSideProps = async () => {
<<<<<<< HEAD
  let res;
  let userClasses;
  try {
    res = await axios.get('http://localhost:3001/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6');
    userClasses = await res.data.classes;
  } catch (err) {
    userClasses = [{
      id: '621522b8-22b7-4634-befc-0a5785f53d3d',
      name: 'Test Class 101',
      classCode: 'Test-101',
      university: 'Test University',
      createdAt: '2019-01-01T00:00:00.000Z',
      enrolled: 10,
    }]
  }
  
=======
      const userClasses = [];

  try {
    const res = await axios.get(
      'http://localhost:3001/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6'
    );
   userClasses = await res.data.classes;
  } catch (err) {
  }
>>>>>>> master
  return { props: { userClasses } };
};
