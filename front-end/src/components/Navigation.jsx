import { React, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { VscAccount } from 'react-icons/vsc';

import Link from 'next/link';
import Search from './SearchBar';
import NewSearch from './NewSearch';
import { useAuth0 } from "@auth0/auth0-react";

function Navigation(props) {

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <nav className="relative top-0 z-10 mt-0 mb-8 w-full bg-indigo-800 p-2">
      <div className="grid w-full grid-cols-12 items-center">
        <div className="col-span-4 flex justify-start font-extrabold text-white lg:col-span-2 lg:justify-center">
          <Link href="/">
            <a className="text-white no-underline hover:text-white hover:no-underline">
              <span className="pl-4 text-2xl lg:pl-2">
                <i className="em em-grinning"></i> Notiefi
              </span>
            </a>
          </Link>
        </div>

        <div className="col-span-8 mr-3 lg:col-span-5 lg:mr-0">
        </div>
        <div className="col-span-full flex content-center justify-between pt-2 lg:col-span-5 lg:justify-end">
          <ul className="list-reset flex flex-1 items-center justify-between lg:flex-none">
            <li className="mr-3">
              <Link href="/upload">
                <a className="link">Upload Notes</a>
              </Link>
            </li>
            <li className="mr-3">

              <Link href="/browse">

                <a className={`link ${props.bold}`}>Browse Classes</a>
              </Link>
            </li>
            <li className="mr-3">
              {isAuthenticated ? <Link href="/profile">
                <a className="link">
                  <VscAccount size={28} className="mt-1" />
                </a>
              </Link> : <button className="text-white link" onClick={() => loginWithRedirect()}>Login</button>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {};

export default Navigation;
