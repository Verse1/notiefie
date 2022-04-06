import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeartButton from './HeartButton';

const Comment = (props) => {
  const router = useRouter();

  return (
    <div className="rounded-2xl bg-slate-100 py-5 px-10 text-slate-800">
      <div className="mb-2 flex justify-between font-bold">
        <p>{props.username}</p>
        <HeartButton />
      </div>
      <p className="">{props.comment}</p>
    </div>
  );
};

Comment.propTypes = {};
export default Comment;
