import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { VscAccount } from 'react-icons/vsc';
import { FaBell } from 'react-icons/fa';
import Link from 'next/link';

function Navigation(props) {
  const router = useRouter();

  return (
    <nav className="relative top-0 z-10 mt-0 mb-8 w-full bg-indigo-800 p-2">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full justify-center font-extrabold text-white md:w-1/2 md:justify-start">
          <Link href="/">
          <a className="text-white no-underline hover:text-white hover:no-underline">
              
            <span className="pl-2 text-2xl">
              <i className="em em-grinning"></i> Notiefi
            </span>
            </a>
          </Link>
        </div>
        <div className="flex w-full content-center justify-between pt-2 md:w-1/2 md:justify-end">
          <ul className="list-reset flex flex-1 items-center justify-between md:flex-none">
            <li className="mr-3">
              <a className="link">Upload Notes</a>
            </li>
            <li className="mr-3">
              <Link href="browse">
                <a className={`link ${props.bold}`}>Browse Classes</a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="notifications">
                <a className="link">
                  <FaBell size={20} />
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="profile">
                <a className="link">
                  <VscAccount size={28} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
