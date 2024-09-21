import React from 'react'
import List from '../components/List'

function Dashboard(props) {

  const {allProds, handleDelete} = props

  return (
    <List 
    allProds={allProds}
    handleDelete = {handleDelete}
    />
  )
}

export default Dashboard