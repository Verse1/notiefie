import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ClassHeader from '../../components/ClassHeader';
import axios from 'axios';

const IndividualClass = ({ notes, classs }) => {
  const router = useRouter();

  return (
    <div>
      <ClassHeader
        color="bg-sky-500"
        name={classs.name}
        code={classs.code}
        posts="10"
        enrolled="60"
        notes={notes}
      />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const res = await axios.get('http://localhost:3001/api/notes/');
  const notes = await res.data;
  const res2 = await axios.get(`http://localhost:3001/api/classes/${id}`);
  const classs = await res2.data;

  return { props: { notes, classs } };
};
IndividualClass.propTypes = {};
export default IndividualClass;
