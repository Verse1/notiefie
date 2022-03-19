import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';

function ClassCard(props) {
  const router = useRouter();

  const [pin, setPin] = useState(false);

  const handlePin = () => {
    setPin(!pin);
  };

  return (
    <>
      <div
        className={`linear text-x relative my-3 cursor-pointer rounded-3xl bg-sky-500 p-7 font-sans transition-all hover:rounded-xl hover:bg-sky-400 order-${props.order}`}>
        <button>
          {pin ? (
            <AiFillPushpin onClick={() => handlePin()} />
          ) : (
            <AiOutlinePushpin
              onClick={() => handlePin()}
              className="hover:fill-blue-500"
            />
          )}
        </button>

        <image src={props.image} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>Enrolled: {props.enrolled}</p>
      </div>
    </>
  );
}

ClassCard.propTypes = {};

export default ClassCard;