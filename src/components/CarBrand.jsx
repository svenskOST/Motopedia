import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CarBrand({ id, color, logo, path }) {
   return (
      <Link
         to={path}
         className='group flex aspect-square w-screen items-center justify-center sm:h-1/2 sm:w-1/2 brightness-50 saturate-75 hover:filter-none transition-[filter] duration-300'
         style={{ backgroundColor: color }}
      >
         <img
            className={`transition-[transform] duration-300 group-hover:scale-110 ${
               id == 5 ? 'w-2/4' : id == 6 ? 'w-1/3' : 'w-1/4'
            }`}
            src={logo}
         />
      </Link>
   )
}

CarBrand.propTypes = {
   id: PropTypes.number,
   color: PropTypes.string,
   logo: PropTypes.string,
   path: PropTypes.string,
}

export default CarBrand
