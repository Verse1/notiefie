import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import AddClassButton from './AddClassButton';
import NotesCard from './NotesCard';

const ClassHeader = (props) => {
  const router = useRouter();

  return (
    <div className="grid place-items-center ">
      <div
        className={`${props.color} relative h-auto w-[100%] min-w-[700px] max-w-[60%] content-center rounded-3xl p-5 text-white`}>
        <div className="mb-10">
          <h1 className={`mr-5 mt-5 inline-block text-3xl font-extrabold`}>
            {props.name}
          </h1>
          <div className="float-right mt-5 -mb-5 block">
            <AddClassButton />
          </div>

          <div className="my-4">
            <span className={`text-2xl`}>{props.code}</span>
            <div className="float-right mr-5 inline-block">
              <span className="mr-5 font-bold text-purple-700 drop-shadow-md">
                Enrolled: {props.enrolled}
              </span>
              <span className="font-bold text-purple-700 drop-shadow-md">
                Total Posts: {props.posts}
              </span>
            </div>
          </div>
        </div>
        {props.notes.map((note) => (
          <NotesCard
            key={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
        {console.log(props.notes)}
      </div>
    </div>
  );
};

ClassHeader.propTypes = {};
export default ClassHeader;
