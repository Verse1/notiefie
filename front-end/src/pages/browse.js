import { React, useState, useEffect } from 'react';
import BrowseClassCard from '../components/BrowseClassCard';
import Navigation from '../components/Navigation';
import axios from 'axios';

function BrowseClasses() {
  async function getClasses(offset) {
    const res = await axios.get(
      `http://localhost:3001/api/classes?offset=${offset}`
    );
    const classes = await res.data;
    setClasses(classes);
  }

  useEffect(() => {
    getClasses(offset);
  }, []);

  const [offset, setOffset] = useState(0);
  const [classes, setClasses] = useState([]);

  return (
    <div>
      <div className="mx-auto mt-20 max-w-screen-lg p-4">
        <div className="mt-12 grid h-1/3 grid-cols-[repeat(4,_minmax(200px,_1fr))] gap-4">
          {classes.map((classCard) => (
            <BrowseClassCard
              key={classCard.classCode}
              classCode={classCard.classCode}
              name={classCard.className}
              id={classCard._id}
              colors={randomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function randomColor() {
  const rndInt = Math.floor(Math.random() * 4);
  const colors = ['bg-teal-', 'bg-cyan-', 'bg-indigo-', 'bg-pink-'];

  if (rndInt === 0) {
    return {
      color: colors[0] + '400',
      hover: 'hover:' + colors[0] + '300',
    };
  } else if (rndInt === 1) {
    return {
      color: colors[1] + '400',
      hover: 'hover:' + colors[1] + '300',
    };
  } else if (rndInt === 2) {
    return {
      color: colors[2] + '400',
      hover: 'hover:' + colors[2] + '300',
    };
  } else if (rndInt === 3) {
    return {
      color: colors[3] + '400',
      hover: 'hover:' + colors[3] + '300',
    };
  }
}

// export const getServerSideProps = async (offset) => {
//   const res = await axios.get(
//     'http://localhost:3001/api/classes?limit=10&offset=' + offset
//   );
//   const classes = await res.data;
//   return { props: { classes } };
// };

BrowseClasses.propTypes = {};
export default BrowseClasses;
