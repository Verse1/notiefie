import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function ClassCard(props) {
  const router = useRouter();

  return (
    <div
      className="fixed rounded-xl bg-blue-200 p-4 transition-all ease-in hover:rounded-md hover:bg-blue-400"
      onClick={() => {
        router.push(`/class/${props.title}`);
      }}>
      <image src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Enrolled: {props.enrolled}</p>
    </div>
  );
}

ClassCard.propTypes = {};

export default ClassCard;
