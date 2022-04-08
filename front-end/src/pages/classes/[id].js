import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ClassHeader from '../../components/ClassHeader';
import axios from 'axios';

const IndividualClass = ({ classs }) => {
  const router = useRouter();

  return (
    <div>
      <ClassHeader
        color="bg-sky-500"
        name={classs.name}
        code={classs.code}
        posts={classs.notes.length}
        enrolled={classs.enrolled}
        notes={classs.notes}
      />
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const res = await axios.get(`http://localhost:3001/api/classes/${id}`);
  const classs = await res.data;

  return { props: { classs } };
};
IndividualClass.propTypes = {};
export default IndividualClass;
