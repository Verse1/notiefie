import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { AiOutlineDownload } from 'react-icons/ai'
import { MdFileDownloadDone } from 'react-icons/md';


const Attachment = props => {
    const router = useRouter();

    const [downloaded, setDownloaded] = useState(false)

    const handleDownload = () => {
      setDownloaded(!downloaded);
    }

    return (
        <div className='w-20 h-20 p-1.5 bg-slate-100 inline-block mx-10 rounded-2xl'>
          {(props.bigDownloaded || downloaded) ? (<MdFileDownloadDone size={22} className="fill-emerald-400 float-right" onClick={handleDownload}/>) : (<AiOutlineDownload size={22} className="hover:fill-emerald-400 fill-slate-800 float-right" onClick={handleDownload}/>)}
        </div>
    )
}

Attachment.propTypes = {};
export default Attachment;