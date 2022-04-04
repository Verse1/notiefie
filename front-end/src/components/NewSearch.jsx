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
      <div>{hit.name}</div>
    </div>
  );
};

const NewSearch = () => {
  const [showHits, setShowHits] = useState(false);

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="classes"
      appId=""
      apiKey="">
      <SearchBox
        translations={{ placeholder: 'Search for a class' }}
        onFocus={() => setShowHits(true)}
        onBlur={() => setShowHits(false)}
      />
      {showHits ? <Hits hitComponent={Hit} /> : null}
    </InstantSearch>
  );
};

export default NewSearch;
