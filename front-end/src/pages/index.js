import React, { useState } from 'react';

import ClassCard from '../components/ClassCard';

export default function Home() {
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

  const [classes, setClasses] = useState([
    {
      id: 1,
      title: 'Intro to CS 1',
      description: 'CS is just the description',
      enrolled: 600,
      num: '400',
      order: 1,
    },
    {
      id: 2,
      title: 'Intro to CS 2',
      description: 'CS is just the description',
      enrolled: 600,
      num: '400',
      order: 2,
    },
    {
      id: 3,
      title: 'Intro to CS 3',
      description: 'CS is just the description',
      enrolled: 600,
      num: '400',
      order: 3,
    },
    {
      id: 4,
      title: 'Intro to CS 4',
      description: 'CS is just the description',
      enrolled: 600,
      num: '400',
      order: 4,
    },
    {
      id: 5,
      title: 'Intro to CS 5',
      description: 'CS is just the description',
      enrolled: 600,
      num: '400',
      order: 5,
    },
  ]);

  return (
    <div className="grid place-items-center">
      {classes
        .sort((a, b) => a.order - b.order)
        .map((classCard) => (
          <ClassCard
            key={classCard.id}
            id={classCard.id}
            title={classCard.title}
            description={classCard.description}
            enrolled={classCard.enrolled}
            num={classCard.num}
            order={classCard.order}
            changeOrder={changeOrder}
          />
        ))}
    </div>
  );
}
