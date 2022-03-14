import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import AddClassButton from '@/components/AddClassButton';

function BrowseClassCard(props) {
    const router = useRouter();

    return (
        <div className="w-full h-64 min-h-fit min-w-50 shadow-lg rounded-xl bg-purple-300 relative">
          <div>
            <h2 className='mt-5 ml-5 text-xl'>{props.name}</h2>
            <p className='ml-5'>{props.classCode}</p>
          </div>
          <div className='absolute bottom-0 right-0'>
            <AddClassButton className='mt-50'/>
          </div>
        </div>

    )


}

BrowseClassCard.propTypes = {};

export default BrowseClassCard;