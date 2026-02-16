import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="¡La Magia del Café te Espera!" />}
        />

        {/* catálogo por categoría */}
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        {/* detalle de producto */}
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        {/* 404 */}
        <Route path="*" element={<h2>404 — Página no encontrada</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App


