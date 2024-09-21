import React from 'react'
import { Link } from 'react-router-dom'

function ListItem(props) {

  const {elem, handleDelete} = props
  
  return (
    <div key={elem.id} className='productDivList'> 
    <p>{elem.title}</p>
    {elem.rating <= 4.7 ? <p>TOP Rated</p> : <p></p>}
    <Link 
    to={`/itemDetailsPage/${elem.id}`}
    elem = {elem}>
    <button>Mas información</button>
    </Link>

    <button onClick={()=> handleDelete(elem.id)}> Eraser</button>
    </div>
  )
}

export default ListItem