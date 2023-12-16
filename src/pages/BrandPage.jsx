import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Car from '../components/brandPage/Car.jsx'

function BrandPage({ name, cars, color }) {
   useEffect(() => {
      var root = document.querySelector(':root')
      root.style.setProperty('--scrollbar-color', color)
      document.title = 'Motopedia - ' + name
      var icon = document.querySelector('link[rel="icon"]')
      var newIcon = document.createElement('link')
      newIcon.rel = 'icon'
      newIcon.href = './src/assets/' + name.toLowerCase() + '/favicon.ico'
      document.head.removeChild(icon)
      document.head.appendChild(newIcon)
   })

   return (
      <>
         {cars.map((car) => (
            <Car
               key={car.id}
               decade={car.decade}
               name={car.name}
               img={car.img}
               desc={car.desc}
               top={car.top}
               hp={car.hp}
               acc={car.acc}
            />
         ))}
      </>
   )
}

BrandPage.propTypes = {
   name: PropTypes.string,
   cars: PropTypes.arrayOf(Object),
   color: PropTypes.string,
}

export default BrandPage
