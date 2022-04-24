import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import HeartButton from './HeartButton';
import {
  AiFillPropertySafety,
  AiOutlineDownload,
  AiOutlineArrowLeft,
} from 'react-icons/ai';
import axios from 'axios';
import { MdFileDownloadDone } from 'react-icons/md';
import Attachment from './Attachment';
import Comment from './Comment';
import Link from 'next/link';

const NoteHeader = (props) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleBigDownload = () => {
    setDownloaded(!downloaded);
  };

  return (
    <div className="grid place-items-center">
      <div
        className={`${props.color} relative h-auto w-[100%] min-w-[700px] max-w-[60%] content-center rounded-3xl p-5 text-white`}>
        <div className="width-[100%] my-10 -mx-5 bg-purple-600 p-5">
          <Link href="/class" passHref>
            <AiOutlineArrowLeft className=" left-0 top-0 mr-5 cursor-pointer" />
          </Link>
        </div>
        <div className="flex justify-between px-5 pb-5 text-2xl">
          <p>{props.title}</p>
          <HeartButton likes={props.likes} id={props.id} liked={props.classes.filter} />
        </div>

        <div className="rounded-3xl bg-white p-5 text-slate-800">
          <p className="pb-10">{props.text}</p>

          {/* <div className="rounded-3xl bg-slate-800 p-5 text-slate-100">
            <div className="mx-10 mb-5 flex justify-between">
              <p className="text-lg">Attachments</p>
              {downloaded ? (
                <MdFileDownloadDone
                  size={28}
                  onClick={handleBigDownload}
                  className="fill-emerald-400"
                />
              ) : (
                <AiOutlineDownload
                  size={28}
                  className="hover:fill-sky-300"
                  onClick={handleBigDownload}
                />
              )}
            </div>

            <div className="inline-block h-[100px] w-[100%] overflow-y-hidden overflow-x-scroll whitespace-nowrap	">
              {props.attachments.map((a, i) => {
                return (
                  <Attachment
                    bigDownloaded={downloaded}
                    attachment={a.attachment}
                    key={i}
                  />
                );
              })}
            </div>
          </div> */}
        </div>
        <div className="mt-20">
          <form className="w-full rounded-2xl bg-white px-4 pt-2">
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-2 mt-2 w-full px-3 md:w-full">
                <textarea
                  className="h-20 w-full resize-none rounded border border-gray-400 bg-gray-100 py-2 px-3 font-medium leading-normal text-black placeholder-gray-400 focus:bg-white focus:outline-none"
                  name="body"
                  placeholder="Add comment..."
                  required></textarea>
              </div>

              <div className="flex w-full items-start px-3 md:w-full">
                <div className="-mr-1 mb-5">
                  <input
                    type="submit"
                    className="mr-1 rounded-lg border border-gray-400 bg-white py-1 px-4 font-medium tracking-wide text-gray-700 hover:bg-gray-100"
                    value="Post"
                  />
                </div>
              </div>
            </div>
          </form>

          {props.comments.map((c) => {
            return (
              <Comment
                username={c.user.name}
                comment={c.comment}
                likes={c.likes}
                id={props.id}
                key={props.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ req }) => {
  const res = await axios.get('http://localhost:3000/api/users/user/classes', {
    headers: {
      Cookies: req.headers.cookie,
    },
  });

  const classes = res.data;

  return {
    props: {
      classes,
    },
  };
};

export default NoteHeader;
