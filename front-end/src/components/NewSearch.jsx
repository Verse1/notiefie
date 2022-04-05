import React, { useState } from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALG_ID,
  process.env.NEXT_PUBLIC_ALG_KEY
);
const Hit = ({ hit }) => {
  return (
    <div>
      <br />
      <div className=" mt-12 absolute grid gap-8 break-normal p-7 lg:grid-cols-1">
        {hit.name}
      </div>
    </div>
  );
};

const NewSearch = () => {
  const [showHits, setShowHits] = useState(false);

  return (
    <InstantSearch searchClient={searchClient} indexName="classes">
      <SearchBox
        translations={{ placeholder: 'Search for a class' }}
        onFocus={() => setShowHits(true)}
        onBlur={() => setShowHits(false)}
      />
      {showHits ? <Hits hitComponent={Hit} /> : null}
      {/* <Hits hitComponent={Hit} /> */}
    </InstantSearch>
  );
};

export default NewSearch;
