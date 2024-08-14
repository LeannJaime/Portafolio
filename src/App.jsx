import './App.css'
import { Inicio } from './assets/components/inicio/Inicio'
import { Navbar } from './assets/components/navbar/Navbar'
import { ParticlesBg } from './assets/components/Particulas/particlesBg'

function App() {

  return (
    <>
      <ParticlesBg />
      <Navbar />
      <Inicio />
    </>
  )
}

export default App
