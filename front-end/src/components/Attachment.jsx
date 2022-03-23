import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const Attachment = props => {
    const router = useRouter();

    return (
        <div className='w-32 pb-32 bg-slate-100 inline-block mx-10 rounded-2xl'>

        </div>
    )
}

Attachment.propTypes = {};
export default Attachment;