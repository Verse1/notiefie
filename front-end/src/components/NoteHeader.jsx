import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import HeartButton from './HeartButton';
import { AiOutlineDownload } from 'react-icons/ai';
import { MdFileDownloadDone } from 'react-icons/md';
import Attachment from './Attachment';
import Comment from './Comment';
import Link from 'next/link';

const NoteHeader = (props) => {
  const router = useRouter();

  const [downloaded, setDownloaded] = useState(false);

  const handleBigDownload = () => {
    setDownloaded(!downloaded);
  };

  return (
    <div className="grid place-items-center">
      <div
        className={`${props.color} relative h-auto w-[100%] min-w-[700px] max-w-[60%] content-center rounded-3xl p-5 text-white`}>
        <div className="width-[100%] my-10 -mx-5 bg-purple-600 p-5">
          <Link href="class" passHref>
            <p className="cursor-pointer px-5 hover:text-slate-200">
              {props.name}
            </p>
          </Link>
        </div>
        <div className="flex justify-between px-5 pb-5 text-2xl">
          <p>{props.title}</p>
          <HeartButton />
        </div>

        <div className="rounded-3xl bg-white p-5 text-slate-800">
          <p className="pb-10">{props.text}</p>

          <div className="rounded-3xl bg-slate-800 p-5 text-slate-100">
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
              <Attachment bigDownloaded={downloaded} />
              <Attachment bigDownloaded={downloaded} />
              <Attachment bigDownloaded={downloaded} />
              <Attachment bigDownloaded={downloaded} />
              <Attachment bigDownloaded={downloaded} />
              <Attachment bigDownloaded={downloaded} />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <form className="w-full bg-white rounded-2xl px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white text-black" name="body" placeholder='Add comment...' required></textarea>
              </div>

              <div className="w-full md:w-full flex items-start md:w-full px-3">
                <div className="-mr-1 mb-5">
                  <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post'/>
                </div>
              </div>
            </div>
          </form>
          <Comment username="foobar" comment="great notes!" />
        </div>
      </div>
    </div>
  );
};

NoteHeader.propTypes = {};
export default NoteHeader;
