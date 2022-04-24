import React, { useState, useEffect } from 'react';
import { RiSettings4Fill } from 'react-icons/ri';
import Image from 'next/image';
import axios from 'axios';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import moment from 'moment';
axios.defaults.withCredentials = true;
import cookies from 'js-cookie';

export default function Profile() {
  const { logout } = useAuth0();
  const [user, setUser] = useState({});
  const [userNotes, setUserNotes] = useState([]);
  const [userLikeNotes, setUserLikeNotes] = useState([]);
  const [allNotes, setAllNotes] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/users/user')
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log('error in request', err);
      });

    axios
      .get('http://localhost:3001/api/users/user/notes')
      .then((res) => {
        setUserNotes(res.data);
      })
      .catch((err) => {
        console.log('error in request', err);
      });

    axios
      .get('http://localhost:3001/api/users/user/likes')
      .then((res) => {
        setUserLikeNotes(res.data);
      })
      .catch((err) => {
        console.log('error in request', err);
      });

    setAllNotes({
      userNotes,
      userLikeNotes,
    });
  }, []);

  const handleLogout = () => {
    cookies.remove('token');
    logout();
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="grid place-items-center">
      <div className={`relative h-auto w-[28%] rounded-3xl bg-sky-500 text-lg`}>
        <div className="text p-5">
          <Link href="settings">
            <a>
              <RiSettings4Fill
                size={42}
                className="float-right"
                color="white"
              />
            </a>
          </Link>

          <button
            className="float-right mt-9 mb-4 cursor-pointer rounded-xl bg-gradient-to-r from-green-300 to-blue-400 p-3 px-9"
            onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="p-5 text-center text-white">
          <h1 className="text-left ">{user.name}</h1>
          <p className="flex text-right">{user.university}</p>

          <p className="flex">{user.likes} likes</p>
          <p>
            Joined {moment(user.createdAt).format('MMMM Do YYYY').toString()}
          </p>
        </div>
        {/* <div className="px-6 pb-10">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 ">
              {Object.keys(notes).map((note) => (
                <Tab
                  key={note}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }>
                  {note}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(allNotes).map((type, code) => (
                <Tab.Panel key={code} className="grid grid-cols-2  gap-4 p-5">
                  {type.map((note) => (
                    <a
                      key={note.id}
                      className="ring-blue mx-2 rounded-xl bg-sky-400 p-5 text-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 hover:bg-indigo-500 focus:outline-none focus:ring-2"
                      href="1">
                      <h2 className="text-lg font-medium leading-7">
                        {note.title}
                        <br />
                        {note.classCode}
                      </h2>
                      <ul className="text-coolGray-500 mt-1 flex space-x-1 text-xs font-normal leading-4">
                        <li>{note.upvotes} upvotes</li>
                      </ul>
                    </a>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div> */}
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   // const picture = await axios
//   //   .get(process.env.PICTURE_API, {
//   //     responseType: 'arraybuffer',
//   //   })
//   //   .then((response) =>
//   //     Buffer.from(response.data, 'binary').toString('base64')
//   //   );

//   // console.log('cookie', cookies.get('jwt'));
//   // const user = await JSON.stringify(
//   //   axios.get('http://localhost:3001/api/users/user')
//   // );

//   // const userNotes = await JSON.stringify(
//   //   axios.get(
//   //     'http://localhost:3001/api/users/2005b873-dd55-4ebe-8165-76ce6d9b83a6/notes'
//   //   )
//   // );

//   return { props: { user } };
// }
