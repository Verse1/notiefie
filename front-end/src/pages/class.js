import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ClassHeader from '../components/ClassHeader';
import axios from 'axios';

const IndividualClass = ({ notes }) => {
  const router = useRouter();

  return (
    <div>
      <ClassHeader
        color="bg-sky-500"
        name="Intro to Computer Science"
        code="CS101"
        posts="10"
        enrolled="60"
        notes={notes}
      />
    </div>
  );
};
export const getStaticProps = async () => {
  const res = await axios.get(process.env.API_URL + '/notes');
  const notes = await res.data;
  return { props: { notes } };
};
IndividualClass.propTypes = {};
export default IndividualClass;
