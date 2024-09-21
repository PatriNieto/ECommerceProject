import React from 'react'
import ListItem from './ListItem';
import AddForm from './AddForm';


function List(props) {
  const {allProds, setAllProds, handleDelete} = props

  /*lo pasamos a app
   const [allProds, setAllProds] = useState(productsData); */
 
   /* const handleDelete = prodId => {
    const filteredProds = allProds.filter( elem => {
      return elem.id !== prodId
    })
    setAllProds(filteredProds)

  }  */

  /* llegada de NewProducts */
  const addNewProduct = newProduct => {
    const updatedProducts = [...allProds, newProduct]
    setAllProds(updatedProducts)
  }

  return (
    <div className='list'>
      <h2>Students List</h2>
      <AddForm 
      addNewProduct = {addNewProduct}
      />
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