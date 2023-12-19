import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Car from '../components/Car.jsx'

function BrandPage({ name, color, cars, assets }) {
   useEffect(() => {
      var root = document.querySelector(':root')
      root.style.setProperty('--scrollbar-color', color)
      document.title = 'Motopedia - ' + name
      var icon = document.querySelector('link[rel="icon"]')
      var newIcon = document.createElement('link')
      newIcon.rel = 'icon'
      newIcon.href = assets.favicon
      document.head.removeChild(icon)
      document.head.appendChild(newIcon)
   })

   return (
      <div style={{ backgroundColor: color }}>
         {cars.map((car) => (
            <Car
               key={car.id}
               img={assets.images[car.id - 1]}
               sound={assets.sounds[car.id - 1]}
               decade={car.decade}
               name={car.name}
               desc={car.desc}
               top={car.top}
               hp={car.hp}
               acc={car.acc}
            />
         ))}
      </div>
   )
}

BrandPage.propTypes = {
   name: PropTypes.string,
   color: PropTypes.string,
   cars: PropTypes.arrayOf(Object),
   assets: PropTypes.object,
}

export default BrandPage
