import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import AddClassButton from '@/components/AddClassButtons';

function BrowseClassCard(props) {
    const router = useRouter();

    return (
        <div className="w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300 block relative">
          <div>
            <h2 className='mt-5 ml-5 text-xl'>{props.name}</h2>
            <p className='ml-5'>{props.classCode}</p>
          </div>
          <div className='absolute bottom-0'>
            <AddClassButton/>
          </div>
        </div>

    )


}

BrowseClassCard.propTypes = {};

export default BrowseClassCard;