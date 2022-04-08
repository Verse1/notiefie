import React, { useState } from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALG_ID,
  process.env.NEXT_PUBLIC_ALG_KEY
);
const Hit = ({ hit }) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-4/12  justify-center bg-gradient-to-r from-green-300 to-blue-400 rounded-md p-1 ">
        <div className="justify-center ">{hit.name}</div>
      </div>
    </div>
  );
};

const NewSearch = () => {
  const [showHits, setShowHits] = useState(false);

  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="classes">
        <SearchBox
          translations={{ placeholder: 'Search for a class' }}
          onFocus={() => setShowHits(true)}
          onBlur={() => setShowHits(false)}
          className="flex justify-center rounded-xl drop-shadow-xl"
        />
        {/* {showHits ? <Hits hitComponent={Hit} /> : null} */}
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
};

export default NewSearch;
