import React from 'react';

export default function settings() {
  return (
    <div className="grid place-items-center">
      <div className={`relative h-auto w-[28%] rounded-3xl bg-sky-500 text-lg`}>
        <div className="p-5 text-center text-white">
          <h1 className="mb-7 text-center text-2xl">Settings</h1>
          <form className="text-center">
            <div>
              <div className="block">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" className="m-2 rounded-md" />
              </div>
              <div className="block">
                <label htmlFor="name">Bio:</label>
                <input type="text" id="bio" className="m-2 rounded-md" />
              </div>
              <button
                type="submit"
                className="mt-9 mb-4 cursor-pointer rounded-xl bg-white p-3 px-9 text-black">
                Submit
              </button>
            </div>
          </form>
          <p className="flex text-right">New York University</p>

          <p>204 Upvotes</p>
          <p>Joined February 27,2022</p>
        </div>
      </div>
    </div>
  );
}
