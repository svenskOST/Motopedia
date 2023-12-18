import './index.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import loadData from './data.js'
import Home from './pages/Home.jsx'
import BrandPage from './pages/BrandPage.jsx'

function App() {
   const [data, setData] = useState(null)

   useEffect(() => {
      async function fetchData() {
         const response = await loadData()
         setData(response)
      }

      fetchData()
   }, [])

   return (
      <>
         {data ? (
            <Routes>
               <Route path='/' element={<Home data={data} />}></Route>
               {data.map((page) => (
                  <Route
                     key={page.id}
                     path={'/' + page.name}
                     element={
                        <BrandPage
                           name={page.name}
                           color={page.color}
                           cars={page.cars}
                           assets={page.assets}
                        />
                     }
                  ></Route>
               ))}
            </Routes>
         ) : (
            ''
         )}
      </>
   )
}

export default App
