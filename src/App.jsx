import './index.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Ferrari from './pages/Ferrari.jsx'
import Porsche from './pages/Porsche.jsx'
import Lamborghini from './pages/Lamborghini.jsx'
import Volvo from './pages/Volvo.jsx'
import McLaren from './pages/McLaren.jsx'
import Renault from './pages/Renault.jsx'

function App() {
   return (
      <>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Ferrari' element={<Ferrari />}></Route>
            <Route path='/Porsche' element={<Porsche />}></Route>
            <Route path='/Lamborhini' element={<Lamborghini />}></Route>
            <Route path='/Volvo' element={<Volvo />}></Route>
            <Route path='/McLaren' element={<McLaren />}></Route>
            <Route path='/Renault' element={<Renault />}></Route>
         </Routes>
      </>
   )
}

export default App
