import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import HeartButton from './HeartButton';

const Comment = props => {
    const router = useRouter();

    return (
        <div className='py-5 px-10 bg-slate-100 text-slate-800 m-5 rounded-2xl'>
            <div className='font-bold mb-2 flex justify-between'>
                <p>{props.username}</p>
                <HeartButton/>
            </div>
            <p className=''>{props.comment}</p>
        </div>
    )
}

Comment.propTypes = {};
export default Comment;