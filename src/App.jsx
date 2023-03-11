import { useState } from 'react'
import './App.css'
import { Actividad1 } from './components/Actividad1'
import Colores from './components/Colores'
import { Datos } from './context/Contexto'

function App() {
  return (
    <>
    <Datos>
      <div className='App'>
        <Actividad1 />
      </div>
    </Datos>
    </>
  )
}

export default App
