import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Car from '../components/brandPage/Car.jsx'

function BrandPage({ cars, color }) {
   useEffect(() => {
      document.querySelector(':root').style.setProperty('--scrollbar-color', color)
      //ändra tab titel, tab ikon och CSS scrollbar variabel
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
   cars: PropTypes.array,
   color: PropTypes.string,
}

export default BrandPage
