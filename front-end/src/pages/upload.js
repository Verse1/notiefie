import React, { useState } from 'react';
import PropTypes from 'prop-types';


function upload(props) {
    return (
            <div className="text-base mx-auto mt-20 p-4 max-w-screen-lg">
                <div className="text-center text-2xl pb-2">
                    <p> Upload Notes </p> 
                </div>
                <form>
                    <div className="p-2">
                        <select required className="px-1 rounded-xl hover:shadow-lg border hover:border-slate-500 text-center">
                            <option>Introduction to Computer Science</option>
                            <option>Computer Systems Organization</option>
                            <option>Introduction to Robotics</option>
                            <option>Introduction to Cryptography</option>
                        </select>
                    </div>
                    <div className="p-2">
                        <textarea required rows="2" maxLength="220" placeholder="Add a title..." className="pl-1 shadow-md hover:shadow-lg w-full bg-white rounded-xl placeholder:italic placeholder:text-slate-500 border"/> 
                    </div>
                    <div className="p-2">
                    <textarea required rows="15" maxLength="4000" placeholder="Add text..." className="pl-1 shadow-md hover:shadow-lg w-full bg-white rounded-xl placeholder:italic placeholder:text-slate-500"/> 
                    </div>
                    <div className="p-2">
                        <input type="file" multiple/>
                    </div>
                    <div className="p-2">
                        <input type="submit" value="Post" className="bg-white rounded-xl px-5 p-2 border hover:shadow-lg hover:border-slate-500 hover:cursor-pointer" />
                    </div>
                </form>
            </div>

    );

}

upload.propTypes = {};
export default upload;
