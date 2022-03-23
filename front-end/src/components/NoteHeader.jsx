import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa'

const NoteHeader = props => {
    const router = useRouter();

    const [liked, setLiked] = useState(false)
    const [fill, setFill] = useState("none")
  
    const handleClick = ev => {
      ev.preventDefault();
      const nextLiked = liked ? false : true;
      const nextFill = fill === "none" ? "currentColor" : "none"
      setLiked(nextLiked)
      setFill(nextFill)
    }

    return (
        <div className='grid place-items-center'>
          <div className={`${props.color} relative h-auto rounded-3xl text-white p-5 content-center min-w-[700px] w-[100%] max-w-[60%]`}>
            <div className='p-5 bg-purple-600 my-10 -mx-5 width-[100%]'>
              <p className='px-5'>{props.name}</p>
            </div>
            <div className="text-2xl px-5 pb-5 flex justify-between">
                <p>{props.title}</p>
                <FaRegHeart onClick={handleClick} value={{color: `${fill}`}}/>
            </div>

            <div className='bg-white text-slate-800 p-5 rounded-3xl'>
              <p>{props.text}</p>
            </div>

          </div>
        </div>
    )

}

NoteHeader.propTypes = {};
export default NoteHeader;