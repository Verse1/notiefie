import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

function AddClassButton(props) {
    const router = useRouter();

    const [state, setState] = useState({
        added: false,
    });

    const handleClick = () => {
        this.setState({added: !this.state.added})
    }

    return (
        <button className="bg-purple-700 hover:bg-purple-600 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center mb-5 mr-5">
            {this.state.added ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={this.handleClick.bind(this)}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={this.handleClick.bind(this)}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>} 
            <span>Add Class</span>
        </button>

    )


}

AddClassButton.propTypes = {};

export default AddClassButton;