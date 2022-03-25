import { React, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { usePopper } from 'react-popper';
import { VscAccount } from 'react-icons/vsc';
import { FaBell } from 'react-icons/fa';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';

function Navigation(props) {
  const router = useRouter();

  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  const notifications = [{
    id: 1,
    title: 'New post in CS101',
    date: 'Today',
  }, {
    id: 2,
    title: 'You have 10 new upvotes on your post!',
    date: '3 days ago',
    }, {
    id: 3,
    title: 'Jessica left you a comment',
    date: '2 weeks ago',
  }];

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
              <Popover className="top-16 w-full max-w-sm">
                {({ open }) => (
                  <>
                    <Popover.Button className="link">
                      <FaBell
                        size={20}
                        className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1">
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2 cursor-pointer">
                            {notifications.map((item) => (
                              <a
                                key={item.id}
                                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                <div className="ml-4">
                                  <p className="text-sm font-medium text-gray-900">
                                    {item.title}
                                  </p>
                                  <p className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                                    {item.date}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
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
