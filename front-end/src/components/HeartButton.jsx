import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const HeartButton = (props) => {
  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(props.likes);

  const handleClick = (ev) => {
    ev.preventDefault();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <button>
      <p>{likes}</p>
      {liked ? (
        <AiFillHeart onClick={handleClick} className="fill-purple-600" />
      ) : (
        <AiOutlineHeart onClick={handleClick} />
      )}
    </button>
  );
};

HeartButton.propTypes = {};
export default HeartButton;
