import React, { useState } from 'react'
import Album from '../SearchBar/Album';
import SearchBar from '../SearchBar/SearchBar'

export default function results(props) {
  
  const { results } = props;
  
  return results.map(result => {
    return <Album key={result.name}  {...result} term={props.term} />;
    
  })
}