import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image'
import profilelogo from '/public/newlogo.png'

function Navigation(props) {
  const router = useRouter();
    
  return(
    <nav className="bg-indigo-800 p-2 mt-0 fixed w-full z-10 top-0 mb-8">
        <div className="container mx-auto flex flex-wrap items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                    <span className="text-2xl pl-2"><i className="em em-grinning"></i> Notiefi</span>
                </a>
            </div>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="mr-3">
                    <a className="link" href="#">Upload Notes</a>
                  </li>
                  <li className={`mr-3  ${props.decoration}`}>
                    <a className="link" href="BrowseClasses">Browse Classes</a>
                  </li>
                    <li className="mr-3">
                    <a className="link" href="Notifications">Notifications</a>
                  </li>
                  <li className="mr-3">
                    <a className="link" href="Profile">
                      <Image src={profilelogo} alt="Profile" width="45px" height="45px"/>
                    </a>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}


Navigation.propTypes = {};
export default Navigation