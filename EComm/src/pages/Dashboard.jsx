import React from 'react'
import List from '../components/List'

function Dashboard(props) {
  
  const {productsData} = props

  return (
    <List 
    productsData={productsData}
    />
  )
}

export default Dashboard