import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function AllBrowseClasses(props) {
    const router = useRouter();
    const classes = [
        { classCode: 'CSCI-UA.0101', name: 'Introduction to Computer Science' },
        { classCode: 'CSCI-UA.0201', name: 'Computer Systems Organization' },
        { classCode: 'CSCI-UA.0465', name: 'Introduction to Robotics' },
        { classCode: 'CSCI-UA.0478', name: 'Introduction to Cryptography' },
    ]


    return (
        
    )


}

AllBrowseClasses.propTypes = {};

export default AllBrowseClasses;