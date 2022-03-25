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

const NoteHeader = props => {
    const router = useRouter();

    const [downloaded, setDownloaded] = useState(false)

    const handleBigDownload = () => {
      setDownloaded(!downloaded);
    }

    return (
        <div className='grid place-items-center'>
          <div className={`${props.color} relative h-auto rounded-3xl text-white p-5 content-center min-w-[700px] w-[100%] max-w-[60%]`}>
            <div className='p-5 bg-purple-600 my-10 -mx-5 width-[100%]'>
              <Link href='class'>
                <p className='px-5 cursor-pointer hover:text-slate-200'>{props.name}</p>
              </Link>
             
            </div>
            <div className="text-2xl px-5 pb-5 flex justify-between">
                <p>{props.title}</p>
                <HeartButton/>
            </div>

            <div className='bg-white text-slate-800 p-5 rounded-3xl'>
              <p className='pb-10'>{props.text}</p>

              <div className='bg-slate-800 text-slate-100 p-5 rounded-3xl'>
                  <div className='flex justify-between mx-10 mb-5'>
                    <p className='text-lg'>Attachments</p>
                    {downloaded ? (<MdFileDownloadDone size={28} onClick={handleBigDownload} className="fill-emerald-400"/>) : (<AiOutlineDownload size={28} className="hover:fill-sky-300" onClick={handleBigDownload}/>)}
                  </div>
                  
                  <div className='overflow-x-scroll overflow-y-hidden w-[100%] h-[100px] inline-block whitespace-nowrap	'>
                    <Attachment bigDownloaded={downloaded}/>
                    <Attachment bigDownloaded={downloaded}/>
                    <Attachment bigDownloaded={downloaded}/>
                    <Attachment bigDownloaded={downloaded}/>
                    <Attachment bigDownloaded={downloaded}/>
                    <Attachment bigDownloaded={downloaded}/>
                  </div>
                  
              </div>

            </div>
            <div className="mt-10">
                <p className='mb-10 px-5 text-2xl'>Comments</p>
                <Comment username='foobar' comment="great notes!"/>
            </div>

          </div>
        </div>
    )

}

NoteHeader.propTypes = {};
export default NoteHeader;