import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Upload({ userClasses }) {
  const [classs, setClasss] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/api/notes/create', {
        title,
        text,
        classs,
      })
      .then((res) => {
        setSuccess('Note created successfully');

        setClasss('');
        setTitle('');
        setText('');
      })
      .catch((err) => {
        console.log('error in request', err);
      });
  };

  return (
    <div className="mx-auto mt-20 max-w-screen-lg p-4 text-base">
      <div className="pb-2 text-center text-2xl">
        <p> Upload Notes </p>
        <p className="text-purple-600 drop-shadow-xl">{success}</p>
      </div>
      <form>
        <div className="p-2">
          <select
            required
            className="rounded-xl border px-1 text-center hover:border-slate-500 hover:shadow-lg"
            name="class"
            onChange={(e) => setClasss(e.target.value)}
            value={classs}>
            {userClasses.map((options) => (
              <option key={options._id} value={options.className}>
                {options.className}
              </option>
            ))}
          </select>
          {console.log(classs)}
        </div>
        <div className="p-2">
          <textarea
            required
            rows="2"
            maxLength="220"
            placeholder="Add a title..."
            className="w-full resize-none rounded-xl border bg-white pl-1 shadow-md placeholder:italic placeholder:text-slate-500 hover:shadow-lg"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="p-2">
          <textarea
            required
            rows="15"
            maxLength="4000"
            placeholder="Add text..."
            className="w-full rounded-xl bg-white pl-1 shadow-md placeholder:italic placeholder:text-slate-500 hover:shadow-lg"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>

        <div className="p-2">
          <button
            className="rounded-xl bg-blue-500 py-2 px-4 font-bold text-white shadow-lg hover:bg-blue-700"
            type="submit"
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export const getServerSideProps = async ({ req }) => {
  let userClasses = [];
  try {
    const res = await axios.get(
      'http://localhost:3001/api/users/user/classes',

      {
        headers: {
          Cookie: req.headers.cookie,
        },
      }
    );
    userClasses = await res.data;
  } catch (err) {
    console.log(err);
  }
  return { props: { userClasses } };
};

export default Upload;
