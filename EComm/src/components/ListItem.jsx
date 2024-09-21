import React from 'react'

function ListItem(props) {

  const {elem, handleDelete} = props

  return (
    <div key={elem.id} className='productDivList'> 
    <p>{elem.title}</p>
    {elem.rating <= 4.6 ? <p>TOP Rated</p> : <p></p>}
    
    <button onClick={()=> handleDelete(elem.id)}> Eraser</button>
    </div>
  )
}

export default ListItem