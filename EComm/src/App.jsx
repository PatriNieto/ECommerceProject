import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import List from './components/List'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import ItemDetailsPage from "./pages/ItemDetailsPage"
import Error from "./pages/Error"
import productsData from "./data/products.json"


function App() {
  const [allProds, setAllProds] = useState(productsData);

  const handleDelete = prodId => {
    const filteredProds = allProds.filter( elem => {
      return elem.id !== prodId
    })
    setAllProds(filteredProds)

  } 

  return (
    <>
     <Sidebar />
     <Navbar />
     <Footer />
     
     

{/*      ------------- ROUTES ----------------
 */}
 <Routes>

  <Route 
  path="/"
  element={<Dashboard 
    allProds={allProds}
    handleDelete = {handleDelete}
    />}
  />

  <Route 
  path="/about"
  element={<About />}
  />


  <Route 
  path="/itemDetailsPage/:productId"
  element={< ItemDetailsPage
    productsData={productsData}
    />}
  />
  
  <Route 
  path="*"
  element={<Error />}
  />
 </Routes>
    </>
  )
}

export default App
