import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FaRegHeart } from 'react-icons/fa'

const Comment = props => {
    const router = useRouter();

    const [liked, setLiked] = useState(false)
    const [fill, setFill] = useState("none")
  
    const handleClick = ev => {
      ev.preventDefault();
      const nextLiked = liked ? false : true;
      const nextFill = fill === "none" ? "currentColor" : "none"
      setLiked(nextLiked)
      setFill(nextFill)
    }

    return (
        <div className='py-5 px-10 bg-slate-100 text-slate-800 m-5 rounded-2xl'>
            <div className='font-bold mb-2 flex justify-between'>
                <p>{props.username}</p>
                <FaRegHeart onClick={handleClick} value={{color: `${fill}`}}/>
            </div>
            <p className=''>{props.comment}</p>
        </div>
    )
}

Comment.propTypes = {};
export default Comment;