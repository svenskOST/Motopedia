import './index.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import dataPromise from './data.js'
import LoadingScreen from './pages/LoadingScreen.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import BrandPage from './pages/BrandPage.jsx'

function App() {
   const [data, setData] = useState([])
   const [isLoaded, setIsLoaded] = useState(false)

   useEffect(() => {
      async function fetchData() {
         const response = await dataPromise()
         setData(response)
      }

      fetchData()

      function handleLoad() {
         setIsLoaded(true)
      }

      window.addEventListener('load', handleLoad)

      return () => {
         window.removeEventListener('load', handleLoad)
      }
   }, [])

   return (
      <>
         {isLoaded && data ? (
            <Routes>
               <Route path='/' element={<Home data={data} />}></Route>
               {data.map((page) => (
                  <Route
                     key={page.id}
                     path={'/' + page.name}
                     element={
                        <>
                           <Navbar />
                           <BrandPage
                              name={page.name}
                              color={page.color}
                              cars={page.cars}
                              assets={page.assets}
                           />
                        </>
                     }
                  ></Route>
               ))}
            </Routes>
         ) : (
            <LoadingScreen />
         )}
      </>
   )
}

export default App
