import './index.css'
import { Route, Routes } from 'react-router'
import data from './data.json'
import Home from './pages/Home.jsx'
import BrandPage from './pages/BrandPage.jsx'
import Ferrari from './assets/ferrari/logo.png'
import Porsche from './assets/porsche/logo.png'
import Lamborghini from './assets/lamborghini/logo.png'
import Volvo from './assets/volvo/logo.png'
import McLaren from './assets/mclaren/logo.png'
import Renault from './assets/renault/logo.png'

const logoMap = {
   Ferrari: Ferrari,
   Porsche: Porsche,
   Lamborghini: Lamborghini,
   Volvo: Volvo,
   McLaren: McLaren,
   Renault: Renault,
}

function App() {
   return (
      <>
         <Routes>
            <Route
               path='/'
               element={<Home data={data} logoMap={logoMap} />}
            ></Route>
            {data.map((page) => (
               <Route
                  key={page.id}
                  path={'/' + page.name}
                  element={
                     <BrandPage
                        name={page.name}
                        cars={page.cars}
                        color={page.color}
                     />
                  }
               ></Route>
            ))}
         </Routes>
      </>
   )
}

export default App
