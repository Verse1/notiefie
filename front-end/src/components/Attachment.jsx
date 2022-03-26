import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { AiOutlineDownload } from 'react-icons/ai';
import { MdFileDownloadDone } from 'react-icons/md';

const Attachment = (props) => {
  const router = useRouter();

  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(!downloaded);
  };

  return (
    <div className="mx-10 inline-block h-20 w-20 rounded-2xl bg-slate-100 p-1.5">
      {props.bigDownloaded || downloaded ? (
        <MdFileDownloadDone
          size={22}
          className="float-right fill-emerald-400"
          onClick={handleDownload}
        />
      ) : (
        <AiOutlineDownload
          size={22}
          className="float-right fill-slate-800 hover:fill-emerald-400"
          onClick={handleDownload}
        />
      )}
    </div>
  );
};

Attachment.propTypes = {};
export default Attachment;
