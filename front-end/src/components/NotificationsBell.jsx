import { React, useState, Fragment } from 'react';
import { FaBell } from 'react-icons/fa';
import { Popover, Transition } from '@headlessui/react';
import { usePopper } from 'react-popper';
import Link from 'next/link';

export default function NavigationBell() {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  const notifications = [
    {
      id: 1,
      title: 'New post in CS101',
      date: 'Today',
    },
    {
      id: 2,
      title: 'You have 10 new upvotes on your post!',
      date: '3 days ago',
    },
    {
      id: 3,
      title: 'Jessica left you a comment',
      date: '2 weeks ago',
    },
  ];
  return (
    <Popover className="top-16 w-full max-w-sm ">
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
            <Popover.Panel className="fixed left-1/2 z-10 ml-[41rem] mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
                <div className="relative grid gap-8 p-7 lg:grid-cols-2">
                  {notifications.map((item) => (
                    <a
                      key={item.id}
                      className="-m-3 flex cursor-pointer items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
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
                <Link href="notifications" passHref>
                <p className="text-coolGray-500 p-3 text-center space-x-1 text-xs cursor-pointer font-normal leading-4 underline">
                  View More
                  </p>
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
