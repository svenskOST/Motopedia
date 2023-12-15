import './index.css'
import { Route, Routes } from 'react-router'
import data from './data.json'
import Home from './pages/Home.jsx'
import BrandPage from './pages/BrandPage.jsx'

function App() {
   return (
      <>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            {data.map((page) => (
               <Route
                  key={page.id}
                  path={'/' + page.name}
                  element={<BrandPage cars={page.cars} color={page.color} />}
               ></Route>
            ))}
         </Routes>
      </>
   )
}

export default App
