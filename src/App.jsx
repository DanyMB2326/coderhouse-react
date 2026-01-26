import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

// IMPORTANTE: Importamos Bootstrap Y nuestro CSS personalizado
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  return (
    <div className="App"> 
      <NavBar />
      <ItemListContainer greeting="¡La Magia del Café te Espera!" />
    </div>
  );
}

export default App;


