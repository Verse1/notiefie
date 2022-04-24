import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ClassHeader from '../../components/ClassHeader';
import axios from 'axios';

const IndividualClass = ({ classs, userClasses }) => {
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
  const res = await axios.get(`http://localhost:3001/api/classes/${id}`);
  const classs = await res.data;

  const res2 = await axios.get(`http://localhost:3001/api/users/user/classes`, {
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const userClasses = await res2.data;

  return { props: { classs, userClasses } };
};

export default IndividualClass;
