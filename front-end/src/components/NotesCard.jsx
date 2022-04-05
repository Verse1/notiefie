import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeartButton from './HeartButton';
import Link from 'next/link';

const NotesCard = (props) => {
  const router = useRouter();

  return (
    <div className={` mb-10 rounded-3xl bg-slate-100 px-10 py-5`}>
      <div className="flex justify-between align-top text-purple-600">
        <Link href="note" passHref>
          <h1 className="my-3 cursor-pointer text-xl font-bold hover:text-purple-700">
            {props.title}
          </h1>
        </Link>
        <HeartButton likes={props.likes} />
      </div>
      <p className="text-slate-800">{props.description}</p>
    </div>
  );
};

NotesCard.propTypes = {};
export default NotesCard;
