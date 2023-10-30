import React from 'react'
import Main from '../organism/main/Main'
import { FilterContext } from '../context/filtercontext';
import { useContext } from 'react';

const Home = () => {
  const {filteredProds} = useContext(FilterContext);
  return <>
    {filteredProds ? <Main data={filteredProds} /> : null}
    </>
}

export default Home;
