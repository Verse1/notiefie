import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function AddClassButton(props) {
    const router = useRouter();

    const [added, setAdded] = useState(false)
    const [color, setColor] = useState('bg-purple-700')
    const [hover, setHover] = useState('hover:bg-purple-600')
    const [text, setText] = useState('Add Class')

    const handleClick = (ev) => {
        ev.preventDefault()
        setAdded(!added)
        const nextColor = color === 'bg-purple-700' ? 'bg-emerald-500' : 'bg-purple-700'
        const nextHover = hover === 'hover:bg-purple-600' ? 'hover:bg-emerald-400' : 'hover:bg-purple-600'
        const nextText = text === 'Add Class' ? 'Class Added' : 'Add Class'
        setColor(nextColor)
        setHover(nextHover)
        setText(nextText)
    }

    const handleColorChange = (ev) => {
        
    }

    return (
        <button className={`${color} ${hover} text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center mb-5 mr-5`} onClick={handleClick}>
            {added ? <svg className="w-6 h-6 hover:before:content-['Remove Class']" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>} 
            <span>{text}</span>
        </button>

    )


}

AddClassButton.propTypes = {};

export default AddClassButton;