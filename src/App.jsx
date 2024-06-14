import './App.css'
import AppMaestro from './Components/AppMaestro/AppMaestro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ProductViewBig from "./Components/ProductViewBig/ProductViewBig"
import Intermedio from "./Components/Sections/Mujer/Mujer"
import Calzado from './Components/Sections/Calzado/Calzado'
import { ProductProvider } from './context/ProductContext'
import CheckoutForm from './Components/checkoutForm/CheckoutForm'

function App() {
  

  return (  
    <>
    <ProductProvider>
      
      <BrowserRouter>

        <AppMaestro/>

        <Routes>

         <Route exact path='/' element={<ItemListContainer/>}/>
         <Route exact path="/product/:prodId" element={<ProductViewBig />} />
         <Route exact path="/Sections/Hombre" element={<Calzado/>}/>
         <Route exact path="Sections/Mujer" element={<Intermedio/>}/>
         <Route exact path="/checkout" element={<CheckoutForm />} />

        </Routes>

      </BrowserRouter>

    </ProductProvider>
    </>
  )
}

export default App
