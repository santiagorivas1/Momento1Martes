import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Carrusel from './components/Carrucel';
import Botones from './components/Botones';
import './App.css'

function App() {
  

  return (
    <>
    
     <NavBar />
     <div className='BodyPage'>
      <h4>Computer And LapTop</h4>
      <h1>Accesories</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, in neque quidem, <br /> nam perferendis iste nobis cumque earum nostrum laboriosam incidunt <br /> impedit minima iusto illo eum maxime modi consectetur beatae.</p>
      <Botones />
     </div>
     <div className="carruselposition">
     <Carrusel />
     </div>
     
     
    </>
  )
}

export default App
