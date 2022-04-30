import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import axios from 'axios';

function AddClassButton(props) {
  const [added, setAdded] = useState(props.added);
  const [color, setColor] = useState(
    props.added ? 'bg-green-500' : 'bg-purple-700'
  );
  const [hover, setHover] = useState(
    props.added ? 'hover:bg-emerald-400' : 'hover:bg-purple-600'
  );
  const [text, setText] = useState(props.added ? 'Class Added' : 'Add Class');

  const handleClick = async (ev) => {
    ev.preventDefault();
    setAdded(!added);

    if (!added) {
      setColor('bg-green-500');
      setHover('hover:bg-emerald-400');
      setText('Class Added');

      await axios.post('http://localhost:3001/api/users/user/add-class', {
        id: props.id,
      });
    } else {
      setColor('bg-purple-700');
      setHover('hover:bg-purple-600');
      setText('Add Class');


      await axios.delete('http://localhost:3001/api/users/user/delete-class', {
        data: {
          id: props.id,
        },
      });
    }

    // // const nextColor =
    // //   color === 'bg-purple-700' ? 'bg-emerald-500' : 'bg-purple-700';
    // const nextHover =
    //   hover === 'hover:bg-purple-600'
    //     ? 'hover:bg-emerald-400'
    //     : 'hover:bg-purple-600';
    // const nextText = text === 'Add Class' ? 'Class Added' : 'Add Class';
    // // setColor(nextColor);
    // setHover(nextHover);
    // // setText(nextText);
  };

  const handleColorChange = (ev) => {};

  return (
    <button
      className={`${color} ${hover} mb-5 mr-5 inline-flex items-center rounded-3xl py-2 px-4 font-bold text-gray-100`}
      onClick={handleClick}>
      {added ? (
        <svg
          className="mr-2 h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ) : (
        <svg
          className="mr-2 h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )}
      <span>{text}</span>
    </button>
  );
}

AddClassButton.propTypes = {};

export default AddClassButton;
