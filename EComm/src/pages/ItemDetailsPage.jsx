import React from 'react'
import { useParams, Link } from 'react-router-dom'



function ItemDetailsPage(props) {


  //esto para la direccion
  const {productId} = useParams()

  //los datos de el producto a enseñar
  

  const showProduct =  props.productsData.find((product)=>{
    //importanto concordar el tipo de dato de la propiedad que comparamos

    return product.id === Number(productId)
  })

  /* const foundProject = props.projects.find((oneProject) => {     //  <== ADD
    return oneProject._id === projectId;
  }); */
  

  return (
    <div className='container-product-details'>
      <p>Product Details</p>
     {!showProduct && (
      <p>This products doesn't exist</p>
     )}
      {showProduct && (
        <>
        <p>{showProduct.title} </p>
        <p>{showProduct.description}</p>
        <div>
          {showProduct.images.map((element) => (
            <img src={`${element}`} alt="" />
          ))}
          
        </div>

        </>
      )}


    <Link to={`/`}>
      Back
    </Link>
    </div>
  )
}

export default ItemDetailsPage