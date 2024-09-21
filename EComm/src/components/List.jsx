import React from 'react'
import ListItem from './ListItem';


function List(props) {
  const {allProds, handleDelete} = props

  /*lo pasamos a app
   const [allProds, setAllProds] = useState(productsData); */
 
   /* const handleDelete = prodId => {
    const filteredProds = allProds.filter( elem => {
      return elem.id !== prodId
    })
    setAllProds(filteredProds)

  }  */

  return (
    <div className='list'>
      <h2>Students List</h2>

      {
        allProds.map( (elem) =>  (

          <ListItem 
          key = {elem.id} //esto no se pasa soloo definimos la key del ListItem
          elem= {elem}
          handleDelete = {handleDelete}
          />
        ))
      }
    </div>
  )
}

export default List