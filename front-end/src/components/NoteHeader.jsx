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
        <div className="mt-10">
          <p className="mb-10 px-5 text-2xl">Comments</p>
          <Comment username="foobar" comment="great notes!" />
        </div>
      </div>
    </div>
  );
};

NoteHeader.propTypes = {};
export default NoteHeader;
