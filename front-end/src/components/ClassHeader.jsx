import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import AddClassButton from './AddClassButton';

const ClassHeader = props => {
    const router = useRouter();

    return (
        <div className="grid place-items-center ">
            <div className={`${props.color} relative h-auto w-[70%] rounded-3xl text-white p-5`}>
                <div className="ml-28">
                  <h1 className={`text-3xl text-left font-extrabold inline-block mr-5 mt-5`}>{props.name}</h1>
                  <AddClassButton className="inline-block mt-2"/>
                  <h2 className={`text-2xl text-left -mt-5 mb-5`}>{props.code}</h2>

                  <div className="inline-block">
                    <p className="inline-block">Enrolled: {props.enrolled}</p>
                    <p>Total Posts: {props.posts}</p>
                  </div>
                </div>
            </div>
        </div>
    )
}

ClassHeader.propTypes = {};

export default ClassHeader;