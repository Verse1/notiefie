import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillPushpin, AiOutlinePushpin } from 'react-icons/ai';
import placeholder from '/public/placeholder.jpg';

function ClassCard(props) {
  const router = useRouter();

  const [pin, setPin] = useState(false);

  const handlePin = () => {
    setPin(!pin);
    props.changeOrder(props.id);
  };

  return (
    <>
      <div
        className={`linear relative my-3 cursor-pointer rounded-3xl bg-sky-500 p-8 font-sans text-lg transition-all hover:rounded-xl hover:bg-sky-400 order-${props.order}`}>
        <button className="float-right">
          {pin ? (
            <AiFillPushpin onClick={() => handlePin()} size={22} />
          ) : (
            <AiOutlinePushpin
              onClick={() => handlePin()}
              className="hover:fill-blue-500"
              size={22}
            />
          )}
        </button>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>Enrolled: {props.enrolled}</p>
      </div>
    </>
  );
}

ClassCard.propTypes = {};

export default ClassCard;
