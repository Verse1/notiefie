import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import NoteHeader from '../components/NoteHeader';

const Note = (props) => {
  const router = useRouter();

  return (
    <div>
      <NoteHeader
        color="bg-sky-500"
        name="Intro to Computer Science"
        title="First lecture notes!"
        text="Topics include an historical perspective, evolving hardware and software, using the Internet, creating web pages, social implications, and using a modern programming language. Problem solving and algorithm development are important themes of the class."
      />
    </div>
  );
};

Note.propTypes = {};
export default Note;
