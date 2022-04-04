import React from 'react';
import algoliasearch from 'algoliasearch';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(process.env.NEXT_PUBLIC_ALG_ID, process.env.NEXT_PUBLIC_ALG_KEY);
// console.log(id);
// console.log(key);
// const searchClient = algoliasearch(
//   'latency',
//   '6be0576ff61c053d5f9a3225e2a90f76'
// );
const Hit = ({ hit }) => {
  return (
    <div>
      <div>
        {hit.name}
      </div>
    </div>
  );
};

const NewSearch = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="classes"
      appId=""
      apiKey="">
      <SearchBox translations={{ placeholder: 'Search for a class' }} />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default NewSearch;
