import React from 'react'
import { useState } from "react";

function AddForm(props) {
  //hacemos un estado para cada campo del nuevo producto con su tipo de dato 
 const [id, setId] = useState(0)
 const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const [price, setPrice] = useState(0)
 const [discountPercentage, setDiscountPercentage] = useState(0)
 const [rating, setRating] = useState(0)
 const [stock, setStock] = useState(0)
 const [brand, setBrand] = useState("")
 const [category, setCategory] = useState("")
 const [thumbnail, setThumbnail] = useState("")
 const [images, setImages] = useState("")

 const handleTitle = elem => setTitle(elem.target.value)
 const handleDescription = elem =>setDescription(elem.target.value)
 const handlePrice = elem =>setPrice(elem.target.value)
 const handleDiscount = elem =>setDiscountPercentage(elem.target.value)
 const handleRating = elem =>setRating(elem.target.value)
 const handleStock = elem =>setStock(elem.target.value)
 const handleBrand = elem =>setBrand(elem.target.value)
 const handleCategory = elem =>setCategory(elem.target.value)
 const handleThumbnail = elem =>setThumbnail(elem.target.value)
 const handleImages = elem =>setImages(elem.target.value)

 // este es el envio del formulario -- se crea un nuevo objeto con lo recogido en los campos del formulario
 const handleSubmit = elem => {
  elem.preventDefault()
  const newProduct = {
    title, description, price, discountPercentage, rating, stock,brand, category, thumbnail, images
  }
  //adding the product
  props.addNewProduct(newProduct)

  //LIMPIAR LOS CAMPOS = LIMPIAR LOS ESTADOS
 setTitle("")
 setDescription("")
 setPrice(elem.target.value)
 setDiscountPercentage(elem.target.value)
 setRating(elem.target.value)
 setStock(elem.target.value)
 setBrand("")
 setCategory("")
 setThumbnail("")
 setImages("")

 }

  return (
    <div className='add-form'>
      <h4>Add a new product</h4>

      {/* form */}

      <form onSubmit={handleSubmit}>

        <label>Name of the product: </label>
        <input
        type='text'
        name='title'
        value={title}
        onChange={handleTitle}
        />

      <label>Describe the product: </label>
        <input
        type='text'
        name='description'
        value={description}
        onChange={handleDescription}
        />

      <label>Price: </label>
        <input
        type='number'
        name='price'
        value={price}
        onChange={handlePrice}
        />

<label>Disccount: </label>
        <input
        type='number'
        name='discountPercentage'
        value={discountPercentage}
        onChange={handleDiscount}

        />
        <label>Rate: </label>
        <input
        type='number'
        name='rating'
        value={rating}
        onChange={handleRating}
        />
        <label>Stock: </label>
        <input
        type='number'
        name='stock'
        value={stock}
        onChange={handleStock}
        />
        <label>Brand of the product: </label>
        <input
        type='text'
        name='brand'
        value={brand}
        onChange={handleBrand}
        />
         <label>Category: </label>
        <input
        type='text'
        name='category'
        value={category}
        onChange={handleCategory}
        />
         <label>Link to thumbnail: </label>
        <input
        type='text'
        name='thumbnail'
        value={thumbnail}
        onChange={handleThumbnail}
        />
         <label>Images of the product: </label>
        <input
        type='text'
        name='brand'
        images={images}
        onChange={handleImages}
        />

      <button type='submit'>Add the product</button>
      </form>

    </div>
  )
}

export default AddForm