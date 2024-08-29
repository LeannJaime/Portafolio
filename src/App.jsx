import './App.css'
import { Inicio } from './assets/components/inicio/Inicio'
import { Navbar } from './assets/components/navbar/Navbar'
import { ParticlesBg } from './assets/components/Particulas/particlesBg'
import { Proyectos } from './assets/components/proyectos/Proyectos'

function App() {

  return (
    <>
      <ParticlesBg />
      <Navbar />
      <Inicio />
      <Proyectos />
    </>
  )
}

export default App
