import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import AddClassButton from '@/components/AddClassButton';

function BrowseClassCard(props) {
    const router = useRouter();

    return (
        <div className="relative">
          <div className="w-full aspect-w-1 aspect-h-1 min-h-fit shadow-lg rounded-xl bg-purple-300">
          <div>
            <h2 className='mt-5 ml-5 text-xl'>{props.name}</h2>
            <p className='ml-5'>{props.classCode}</p>
          </div>
          <div className='absolute bottom-0 right-0'>
            <AddClassButton className='mt-50'/>
          </div>
          </div>
        </div>
        

    )


}

BrowseClassCard.propTypes = {};

export default BrowseClassCard;