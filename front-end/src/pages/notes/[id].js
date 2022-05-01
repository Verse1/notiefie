import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import NoteHeader from '../../components/NoteHeader';
import axios from 'axios';

const Note = ({ note }) => {
  const router = useRouter();

  return (
    <div>
      <NoteHeader
        color="bg-sky-500"
        name={note.class}
        title={note.title}
        text={note.text}
        comments={note.comments}
        likes={note.likes}
        attachments={note.attachments}
        id={note.id}
      />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const data = context.query.id;
  const res = await axios.get(`http://api:3001/api/notes/${data}`, {
    headers: {
      Cookie: context.req.headers.cookie,
    },
  });
  const note = await res.data;
  return { props: { note } };
};

Note.propTypes = {};
export default Note;
