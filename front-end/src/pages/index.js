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

  return (
    <div className="grid place-items-center">
      {classes
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
        ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(
    'http://localhost:3001/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6'
  );
  const userClasses = await res.data.classes;
  return { props: { userClasses } };
};