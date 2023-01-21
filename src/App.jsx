import { useState } from 'react'
//import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer  greeting='SALUDO'/>
    </>
  )

}

export default App;
