import React from 'react'
import List from '../components/List'

function Dashboard(props) {

  const {allProds,setAllProds, handleDelete} = props

  return (
    <List 
    allProds={allProds}
    handleDelete = {handleDelete}
    setAllProds = {setAllProds}
    />
  )
}

export default Dashboard