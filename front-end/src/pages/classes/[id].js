import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ClassHeader from '../../components/ClassHeader';
import axios from 'axios';

const IndividualClass = ({ classs, userClasses, userLikes }) => {
  return (
    <div>
      <ClassHeader
        color="bg-sky-500"
        name={classs.className}
        code={classs.classCode}
        posts={classs.notes.length}
        enrolled={classs.numEnrolled}
        notes={classs.notes}
        id={classs._id}
        userLikes={userLikes}
        added={
          userClasses.filter(
            (userClass) => userClass.classCode === classs.classCode
          ).length > 0
        }
      />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const res = await axios.get(`http://api:3001/api/classes/${id}`);
  const classs = await res.data;

  const res2 = await axios.get(`http://api:3001/api/users/user/classes`, {
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });

  const userClasses = await res2.data;
  const res3 = await axios.get(`http://api:3001/api/users/user/likes`, {
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });

  const userLikes = await res3.data;

  return { props: { classs, userClasses, userLikes } };
};

export default IndividualClass;
