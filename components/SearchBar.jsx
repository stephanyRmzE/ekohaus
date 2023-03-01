import React from 'react'
import {useRouter} from 'next/router'

function SearchBar(props) {

  const router = useRouter();

  const {
    query = 'all'
  } = router.query;

  const {products, countProducts} = props;

  const filterSearch = ({searchQuery}) => {

    const {query} = router;

    if (searchQuery) query.searchQuery = searchQuery;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };


  return (
    <div>SearchBar</div>
  )
}

export default SearchBar
