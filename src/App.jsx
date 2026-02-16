import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡La Magia del Café te Espera!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡La Magia del Café te Espera!" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 className="text-center my-5">404 - Ruta no encontrada</h2>} />
      </Routes>
    </div>
  )
}

export default App
