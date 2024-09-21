import React from 'react'
import productsData from "../data/products.json"
import { useState } from 'react';
import ListItem from './ListItem';

function List() {

  const [allProds, setAllProds] = useState(productsData);
 
   const handleDelete = prodId => {
    const filteredProds = allProds.filter( elem => {
      return elem.id !== prodId
    })
    setAllProds(filteredProds)

  } 

  return (
    <div className='list'>
      <h2>Students List</h2>

      {
        allProds.map( (elem) =>  (

          <ListItem 
         
          elem= {elem}
          handleDelete = {handleDelete}
          />
       


        ))
      }
    </div>

  )
}

export default List