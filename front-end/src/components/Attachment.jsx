import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { AiOutlineDownload } from 'react-icons/ai'

const Attachment = props => {
    const router = useRouter();

    return (
        <div className='w-20 h-20 p-1.5 bg-slate-100 inline-block mx-10 rounded-2xl'>
          <AiOutlineDownload size={22} className="hover:fill-emerald-400 fill-slate-800 float-right"/>
        </div>
    )
}

Attachment.propTypes = {};
export default Attachment;