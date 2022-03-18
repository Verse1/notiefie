import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function BrowseClassCard(props) {
    const router = useRouter();

    return (
        <div class="w-full h-0 shadow-lg aspect-w-1 aspect-h-1 rounded-xl bg-yellow-300">
        <h2 className=''>{props.name}</h2>
        <p className=''>{props.classCode}</p>
        </div>

    )


}

BrowseClassCard.propTypes = {};

export default BrowseClassCard;